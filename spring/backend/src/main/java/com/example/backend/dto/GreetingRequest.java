package com.example.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class GreetingRequest {
    private String name;

    public GreetingRequest() {
    }
}