package com.example.backend.repository;

import com.example.backend.entity.IsEmailDuplicateEntity;
import com.example.backend.entity.IsUserIdDuplicateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IsEmailDuplicateRepository extends JpaRepository<IsEmailDuplicateEntity, Long> {
    Optional<IsEmailDuplicateEntity> findByEmail(String email);
}
