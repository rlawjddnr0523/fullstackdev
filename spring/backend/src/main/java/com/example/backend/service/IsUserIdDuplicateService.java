package com.example.backend.service;

import com.example.backend.repository.IsUserIdDuplicateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IsUserIdDuplicateService {

    private final IsUserIdDuplicateRepository isUserIdDuplicateRepository;

    @Autowired
    public IsUserIdDuplicateService(IsUserIdDuplicateRepository isUserIdDuplicateRepository) {
        this.isUserIdDuplicateRepository = isUserIdDuplicateRepository;
    }

    public boolean isUsernameDuplicate(String username) {
        return isUserIdDuplicateRepository.findByUsername(username).isPresent();
    }
}
