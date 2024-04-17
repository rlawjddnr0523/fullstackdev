package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "user_data")
public class RegistEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idx;
    private String username;
    private String password;
    private String email;
    private LocalDate birthdate;

    // 기본 생성자
    public RegistEntity() {
    }

    // 모든 필드를 포함한 생성자 (선택적)
//    public RegistEntity(String usrname, String password, String email, LocalDate birthdate) {
//        this.usrname = usrname;
//        this.password = password;
//        this.email = email;
//        this.birthdate = birthdate;
//    }
}
