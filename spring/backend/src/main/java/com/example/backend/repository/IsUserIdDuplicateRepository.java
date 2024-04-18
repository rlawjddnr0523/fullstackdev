package com.example.backend.repository;

import com.example.backend.entity.IsUserIdDuplicateEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface IsUserIdDuplicateRepository extends JpaRepository<IsUserIdDuplicateEntity, Long> {
    Optional<IsUserIdDuplicateEntity> findByUsername(String username);
}
