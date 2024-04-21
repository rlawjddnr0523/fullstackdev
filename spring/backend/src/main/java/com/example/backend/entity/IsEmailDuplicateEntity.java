package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity @Table(name = "user_data")
public class IsEmailDuplicateEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String email;

    public IsEmailDuplicateEntity() {}
}
