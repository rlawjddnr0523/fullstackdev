package com.example.backend.exception;

import lombok.Getter;

@Getter
public class CustomException extends RuntimeException {
    private final String code;

    public CustomException(String code, String message) {
        super(message); // 상위 클래스인 RuntimeException에 message를 전달합니다.
        this.code = code;
    }

}
