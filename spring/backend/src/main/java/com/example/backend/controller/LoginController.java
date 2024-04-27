package com.example.backend.controller;

import com.example.backend.service.LoginService;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class LoginController {
    @Autowired
    private LoginService loginService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials, HttpSession session) {
        try {
            String username = credentials.get("username");
            String password = credentials.get("password");
            if (loginService.authenticate(username,password)) {
                session.setAttribute("username", username);
                session.setAttribute("uid", username);
                return ResponseEntity.ok().body(true);
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(false);
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("requesting Error!");
        }
    }
    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpSession session) {
        if (session.getAttribute("username") == null && session.getAttribute("uid") == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        } else {
            try {
                session.invalidate();
                return ResponseEntity.ok().body(true);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("requesting Error!");
            }
        }
    }
    @GetMapping("/login-status")
    public ResponseEntity<?> getLoginStatus(HttpSession session) {
        if (session.getAttribute("username") == null) {
            return ResponseEntity.status(HttpStatus.IM_USED).body(false);
        } else {
            try {
                session.getAttribute("username");
                return ResponseEntity.ok().body(true);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("requesting Error!");
            }
        }
    }
}
