package com.sustainify.sustainify.Repository;

import com.sustainify.sustainify.Model.Reporter;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReporterRepository extends JpaRepository<Reporter, Long> {
    Optional<Reporter> findByUserId(Long userId);
}
