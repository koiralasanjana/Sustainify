package com.sustainify.sustainify.Service;

import com.sustainify.sustainify.Model.Reporter;
import com.sustainify.sustainify.Repository.ReporterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReporterService {

    @Autowired
    private ReporterRepository reporterRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;  // Autowire PasswordEncoder

    public boolean authenticateReporter(String email, String password) {
        // Find the reporter by email
        Reporter reporter = reporterRepository.existsByEmail(email);
        
        if (reporter == null) {
            return false;  // Reporter not found
        }
        
        // Check if the password matches
        return passwordEncoder.matches(password, reporter.getPassword());
    }

    public Reporter registerReporter(Reporter reporter) {
        // Check if required fields are not null
        if (reporter.getName() == null || reporter.getEmail() == null || reporter.getPassword() == null) {
            throw new IllegalArgumentException("Name, email, and password must not be null.");
        }
        
        // Hash password before saving
        reporter.setPassword(passwordEncoder.encode(reporter.getPassword()));
        
        // Save and return the reporter entity
        return reporterRepository.save(reporter);
    }

    // Fetch all reporters
    public List<Reporter> getAllReporters() {
        return reporterRepository.findAll();
    }
}
