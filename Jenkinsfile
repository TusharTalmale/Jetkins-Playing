pipeline {
    agent any
    environment {
        DOCKER_REGISTRY = 'tushartalmale' // Replace with your Docker Hub username
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
                sh 'cd Jetkin-Demo - Backend && mvn clean package -DskipTests'
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
        // Optional: Add a stage to push the Docker images (requires Docker credentials in Jenkins)
        // stage('Push Docker Images') {
        //     steps {
        //         withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
        //             echo "Logging into Docker registry: ${DOCKER_REGISTRY}"
        //             sh "docker login -u '$DOCKER_USERNAME' -p '$DOCKER_PASSWORD' ${DOCKER_REGISTRY}"
        //             sh "docker push ${BACKEND_IMAGE_NAME}:${IMAGE_TAG}"
        //             sh "docker push ${FRONTEND_IMAGE_NAME}:${IMAGE_TAG}"
        //         }
        //     }
        // }
    }
}