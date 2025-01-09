package com.sustainify.sustainify.controller;

import com.sustainify.sustainify.Model.Reporter;
import com.sustainify.sustainify.Service.ReporterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")  // Replace with your frontend URL
@RestController
@RequestMapping("/api")
public class ReporterController {

    @Autowired
    private ReporterService reporterService;

    // GET mapping to fetch all reporters
    @GetMapping("/reporters")
    public ResponseEntity<List<Reporter>> getAllReporters() {
        try {
            List<Reporter> reporters = reporterService.getAllReporters();
            if (reporters.isEmpty()) {
                return ResponseEntity.noContent().build();
            }
            return ResponseEntity.ok(reporters);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);  // Handle internal server error
        }
    }

    // POST mapping to register a new reporter
    @PostMapping("/register")
    public ResponseEntity<String> registerReporter(@RequestBody Reporter reporter) {
        try {
            reporterService.registerReporter(reporter);  // Call the service layer to register the reporter
            return ResponseEntity.status(201).body("Reporter registered successfully!");  // HTTP 201 for resource creation
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());  // Return bad request for validation errors
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());  // Handle unexpected errors
        }
    }

    // GET mapping to fetch a reporter by ID
    @GetMapping("/reporters/{id}")
    public ResponseEntity<Reporter> getReporterById(@PathVariable Long id) {
        try {
            Reporter reporter = reporterService.getReporterById(id);
            if (reporter == null) {
                return ResponseEntity.notFound().build();  // Return 404 if reporter not found
            }
            return ResponseEntity.ok(reporter);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);  // Handle internal server error
        }
    }

    // PUT mapping to update an existing reporter
    @PutMapping("/reporters/{id}")
    public ResponseEntity<String> updateReporter(@PathVariable Long id, @RequestBody Reporter updatedReporter) {
        try {
            boolean isUpdated = reporterService.updateReporter(id, updatedReporter);
            if (isUpdated) {
                return ResponseEntity.ok("Reporter updated successfully!");  // Return success message if updated
            }
            return ResponseEntity.notFound().build();  // Return 404 if reporter not found for update
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());  // Handle unexpected errors
        }
    }

    // DELETE mapping to remove a reporter by ID
    @DeleteMapping("/reporters/{id}")
    public ResponseEntity<String> deleteReporter(@PathVariable Long id) {
        try {
            boolean isDeleted = reporterService.deleteReporter(id);
            if (isDeleted) {
                return ResponseEntity.ok("Reporter deleted successfully!");  // Return success message if deleted
            }
            return ResponseEntity.notFound().build();  // Return 404 if reporter not found for deletion
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());  // Handle unexpected errors
        }
    }
}
