package com.example.backend.controller;

import com.example.backend.dto.RegistDto;
import com.example.backend.entity.RegistEntity;
import com.example.backend.service.RegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.time.LocalDate;

@RestController
public class RegistEntityController {

    private final RegistService registService;

    @Autowired
    public RegistEntityController(RegistService registService) {
        this.registService = registService;
    }

    @PostMapping("/api/v1/regist")
    public RegistEntity createUser(@RequestBody RegistDto registDto) {
        RegistEntity user = new RegistEntity();
        user.setIdx(registDto.getIdx());
        user.setUsername(registDto.getUsername());
        user.setPassword(registDto.getPassword());
        user.setEmail(registDto.getEmail());
        user.setBirthdate(LocalDate.parse(registDto.getBirthdate())); // 문자열을 LocalDate로 변환
        return registService.saveregistEntity(user);
    }
}