pipeline {
    agent {
        docker {
            image 'maven:3.9.4-eclipse-temurin-17'
        }
    }
    environment {
        DOCKER_REGISTRY = 'tushartalmale'
        BACKEND_IMAGE_NAME = "${DOCKER_REGISTRY}/my-backend-app"
        FRONTEND_IMAGE_NAME = "${DOCKER_REGISTRY}/my-frontend-app"
        IMAGE_TAG = 'latest'
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend') {
            steps {
                echo 'Building Spring Boot backend'
                sh 'cd backend && mvn clean package -DskipTests'
            }
        }

        stage('Build Frontend') {
            steps {
                echo 'Building React frontend'
                sh 'cd frontend && npm install --frozen-lockfile && npm run build'
            }
        }

        stage('Build Backend Docker Image') {
            steps {
                echo "Building backend Docker image: ${BACKEND_IMAGE_NAME}:${IMAGE_TAG}"
                sh "cd backend && docker build -t ${BACKEND_IMAGE_NAME}:${IMAGE_TAG} ."
            }
        }

        stage('Build Frontend Docker Image') {
            steps {
                echo "Building frontend Docker image: ${FRONTEND_IMAGE_NAME}:${IMAGE_TAG}"
                sh "cd frontend && docker build -t ${FRONTEND_IMAGE_NAME}:${IMAGE_TAG} -f Dockerfile ."
            }
        }
    }
}
