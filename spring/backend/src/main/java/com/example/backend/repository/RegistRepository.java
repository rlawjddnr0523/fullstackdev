package com.example.backend.repository;

import com.example.backend.entity.RegistEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RegistRepository extends JpaRepository<RegistEntity, String> {
}
