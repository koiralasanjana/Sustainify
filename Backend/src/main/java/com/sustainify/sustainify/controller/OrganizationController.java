package com.sustainify.sustainify.controller;

import com.sustainify.sustainify.Model.Organization;
import com.sustainify.sustainify.Service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import java.util.List;

@Valid
@CrossOrigin(origins = "http://localhost:3000")  // Replace with your frontend URL
@RestController
@RequestMapping("/api")
public class OrganizationController {

    @Autowired
    private OrganizationService organizationService;

    @PostMapping("/register-organization")
    public ResponseEntity<String> registerOrganization(@Valid @RequestBody Organization organization) {
        try {
            organizationService.registerOrganization(organization);
            return ResponseEntity.ok("Organization registered successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }
    @GetMapping("/organization/{id}")
    public ResponseEntity<Organization> getOrganization(@PathVariable Long id) {
        try {
            Organization organization = organizationService.getOrganizationById(id);
            if (organization != null) {
                return ResponseEntity.ok(organization);
            } else {
                return ResponseEntity.status(404).body(null); // Not Found
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Internal Server Error
        }
    }
    @GetMapping("/organizations")
    public ResponseEntity<List<Organization>> getAllOrganizations() {
        try {
            List<Organization> organizations = organizationService.getAllOrganizations();
            if (organizations.isEmpty()) {
                return ResponseEntity.status(404).body(null); // Not Found if no organizations
            } else {
                return ResponseEntity.ok(organizations); // Return all organizations
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null); // Internal Server Error
        }
    }


}
