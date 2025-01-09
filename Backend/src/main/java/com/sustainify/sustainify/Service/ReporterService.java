package com.sustainify.sustainify.Service;

import com.sustainify.sustainify.Model.Reporter;
import com.sustainify.sustainify.Model.User;
import com.sustainify.sustainify.Repository.ReporterRepository;
import com.sustainify.sustainify.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.List;


@Service
public class ReporterService {

    @Autowired
    private ReporterRepository reporterRepository;

    @Autowired
    private UserRepository userRepository;

    // Method to get all reporters
    public List<Reporter> getAllReporters() {
        return reporterRepository.findAll();  // Fetch all reporters from the database
    }

    // Create a new Reporter with an associated User
    @Transactional
    public Reporter createReporter(Reporter reporter) {
        // Ensure the role is set to "reporter" if not already set
        User user = reporter.getUser();
        if (user != null && (user.getRole() == null || user.getRole().isEmpty())) {
            user.setRole("reporter");
        }

        // Save the User first to ensure it gets a user_id
        userRepository.save(user);

        // Save the Reporter
        return reporterRepository.save(reporter);
    }

    // Get a Reporter by ID
    public Optional<Reporter> getReporterById(Long id) {
        return reporterRepository.findById(id);
    }

    // Update an existing Reporter
    @Transactional
    public Reporter updateReporter(Long id, Reporter updatedReporter) {
        // Retrieve the existing Reporter
        Optional<Reporter> optionalReporter = reporterRepository.findById(id);
        if (optionalReporter.isPresent()) {
            Reporter existingReporter = optionalReporter.get();

            // Update the fields
            existingReporter.setName(updatedReporter.getName());
            existingReporter.setCreatedAt(updatedReporter.getCreatedAt());

            // Update User if necessary
            User existingUser = existingReporter.getUser();
            User updatedUser = updatedReporter.getUser();
            if (updatedUser != null) {
                existingUser.setEmail(updatedUser.getEmail());
                existingUser.setPassword(updatedUser.getPassword());
                existingUser.setRole(updatedUser.getRole());
            }

            // Save the updated Reporter
            return reporterRepository.save(existingReporter);
        }
        return null;
    }

    // Delete a Reporter by ID
    @Transactional
    public void deleteReporter(Long id) {
        // Retrieve the Reporter by ID
        Optional<Reporter> optionalReporter = reporterRepository.findById(id);
        if (optionalReporter.isPresent()) {
            Reporter reporter = optionalReporter.get();
            // Remove the associated User as well
            userRepository.delete(reporter.getUser());
            // Remove the Reporter
            reporterRepository.delete(reporter);
        }
    }

    // Find a Reporter by User ID
    public Optional<Reporter> findByUserId(Long userId) {
        return reporterRepository.findByUserId(userId);
    }
}
