package com.example.backend.controller;

import com.example.backend.service.IsEmailDuplicateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/logics")
public class IsEmailDuplicateController {
    private final IsEmailDuplicateService isEmailDuplicateService;

    @Autowired
    public IsEmailDuplicateController(IsEmailDuplicateService isEmailDuplicateService) {
        this.isEmailDuplicateService = isEmailDuplicateService;
    }

    @GetMapping("/check-email-duplicate")
    public ResponseEntity<Boolean> checkEmailDuplicate(@RequestParam String email) {
        boolean isDuplicate = isEmailDuplicateService.isEmailDuplicate(email);
        return ResponseEntity.ok(isDuplicate);
    }
}
