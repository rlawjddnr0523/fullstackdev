package com.example.backend.exception;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ErrorDetails {
    private String code;
    private String message;

    public ErrorDetails(String code, String message) {
        this.code = code;
        this.message = message;
    }
}

