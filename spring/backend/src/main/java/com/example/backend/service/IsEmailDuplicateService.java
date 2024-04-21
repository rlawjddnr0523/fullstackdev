package com.example.backend.service;

import com.example.backend.repository.IsEmailDuplicateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IsEmailDuplicateService {
    private final IsEmailDuplicateRepository isEmailDuplicateRepository;

    @Autowired
    public IsEmailDuplicateService(IsEmailDuplicateRepository isEmailDuplicateRepository) {
        this.isEmailDuplicateRepository = isEmailDuplicateRepository;
    }

    public boolean isEmailDuplicate(String email) {
        return isEmailDuplicateRepository.findByEmail(email).isPresent();
    }
}
