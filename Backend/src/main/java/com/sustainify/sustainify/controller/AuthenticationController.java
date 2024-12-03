package com.sustainify.sustainify.controller;

import com.sustainify.sustainify.Model.Reporter;
import com.sustainify.sustainify.Service.ReporterService;
import com.sustainify.sustainify.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")  // Replace with your frontend URL
@RestController
@RequestMapping("/api")
public class AuthenticationController {

    @Autowired
    private ReporterService reporterService;

    @Autowired
    private JwtUtil jwtUtil;

    // @Autowired
    // private PasswordEncoder passwordEncoder;

    // Endpoint for user login (authentication)
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Reporter reporter) {
        try {
            // Authenticate user (check if password matches)
            boolean isAuthenticated = reporterService.authenticateReporter(reporter.getEmail(), reporter.getPassword());

            if (isAuthenticated) {
                // Generate JWT token if authentication is successful
                String token = jwtUtil.generateToken(reporter.getEmail());
                return ResponseEntity.ok().body(new AuthenticationResponse(token));
            } else {
                return ResponseEntity.status(401).body("Invalid credentials.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Internal server error: " + e.getMessage());
        }
    }

    // Helper class to return JWT token
    public static class AuthenticationResponse {
        private String token;

        public AuthenticationResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }
    }
}
