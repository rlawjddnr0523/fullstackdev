package com.example.backend.service;

import com.example.backend.entity.LoginEntity;
import com.example.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public boolean authenticate(String username, String password) {
        // 사용자 이름으로 사용자 정보를 조회
        Optional<LoginEntity> user = loginRepository.findByUsername(username);

        // 사용자 정보가 존재하고, 비밀번호가 일치하는지 확인
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            // 인증 성공
            return true;
        }

        // 인증 실패
        return false;
    }
}
