package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "user_data")
public class LoginEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String username;
    private String password;

}
