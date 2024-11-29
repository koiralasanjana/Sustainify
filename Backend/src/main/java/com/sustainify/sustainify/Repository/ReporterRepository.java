package com.sustainify.sustainify.Repository;

import com.sustainify.sustainify.Model.Reporter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReporterRepository extends JpaRepository<Reporter, Long>{
   
} 
