package com.example.backend.controller;

import com.example.backend.service.IsUserIdDuplicateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/logics")
public class IsUserIdDuplicateController {

    private final IsUserIdDuplicateService isUserIdDuplicateService;

    @Autowired
    public IsUserIdDuplicateController(IsUserIdDuplicateService isUserIdDuplicateService) {
        this.isUserIdDuplicateService = isUserIdDuplicateService;
    }

    @GetMapping("/check-username-duplicate")
    public ResponseEntity<Boolean> checkUsernameDuplicate(@RequestParam String username) {
        boolean isDuplicate = isUserIdDuplicateService.isUsernameDuplicate(username);
        return ResponseEntity.ok(isDuplicate);
    }
}
