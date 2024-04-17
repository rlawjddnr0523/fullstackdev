package com.example.backend.service;

import com.example.backend.entity.RegistEntity;
import com.example.backend.repository.RegistRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistService {

    private final RegistRepository registRepository;

    @Autowired
    public RegistService(RegistRepository registRepository) {
        this.registRepository = registRepository;
    }

    public RegistEntity saveregistEntity(RegistEntity registEntity) {
        return registRepository.save(registEntity);
    }
}
