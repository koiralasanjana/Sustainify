package com.sustainify.sustainify.controller;

import com.sustainify.sustainify.Model.Report;
import com.sustainify.sustainify.Service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class ReportController {

    @Autowired
    private ReportService reportService;

    // Endpoint to submit a report
    @PostMapping
    public ResponseEntity<String> submitReport(@Valid @RequestBody Report report) {
        try {
            reportService.submitReport(report);
            return ResponseEntity.ok("Report submitted successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }

    // Endpoint to get all reports
    @GetMapping
    public ResponseEntity<List<Report>> getAllReports() {
        return ResponseEntity.ok(reportService.getAllReports());
    }

    // Endpoint to update the status of a report
    @PutMapping("/{id}/status")
    public ResponseEntity<String> updateReportStatus(@PathVariable Long id, @RequestParam String status) {
        try {
            reportService.updateReportStatus(id, status);
            return ResponseEntity.ok("Report status updated successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        }
    }
}

