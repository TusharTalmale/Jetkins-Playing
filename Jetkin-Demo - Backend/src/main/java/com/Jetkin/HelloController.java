package com.Jetkin;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@CrossOrigin(origins = "*")
@RestController
public class HelloController {
    @GetMapping("/api/time")
    public String getCurrentTime(){
        DateTimeFormatter date = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        LocalDateTime nowDate = LocalDateTime.now();
        return date.format(nowDate);
    }

    public String getHello(){
        return "Hello From SpringBoot";
    }
}
