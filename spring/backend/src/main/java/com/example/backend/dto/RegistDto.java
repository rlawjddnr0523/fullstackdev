package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Setter @Getter
public class RegistDto {
    private Long idx;
    private String username;
    private String password;
    private String email;
    private String birthdate; // LocalDate 대신 문자열로 받음
}
