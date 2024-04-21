package com.example.backend.controller;

import com.example.backend.dto.RegistDto;
import com.example.backend.entity.RegistEntity;
import com.example.backend.service.RegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;

@RestController
public class RegistEntityController {

    private final RegistService registService;

    @Autowired
    public RegistEntityController(RegistService registService) {
        this.registService = registService;
    }

    @PostMapping("/api/v1/regist")
    public ResponseEntity<?> createUser(@RequestBody RegistDto registDto) {
        try {
            RegistEntity user = new RegistEntity();
            user.setIdx(registDto.getIdx());
            user.setUsername(registDto.getUsername());
            user.setPassword(registDto.getPassword());
            user.setEmail(registDto.getEmail());
            try {
                user.setBirthdate(LocalDate.parse(registDto.getBirthdate())); // 문자열을 LocalDate로 변환
            } catch (DateTimeParseException e) {
                return ResponseEntity.badRequest().body("Invalid birthdate format");
            }
            RegistEntity savedUser = registService.saveregistEntity(user);
            return ResponseEntity.ok(savedUser);
        } catch (Exception e) {
            // 서버 내부 에러 처리
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred: " + e.getMessage());
        }
    }
}
