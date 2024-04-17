package com.example.backend.controller;

import com.example.backend.dto.GreetingRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

    @PostMapping("/greeting")
    public ResponseEntity<String> greet(@RequestBody GreetingRequest request){
        // 요청에서 이름을 가져와 인사말을 생성
        String message = "Hello," + request.getName() + "!";
        return ResponseEntity.ok(message);
    }
}