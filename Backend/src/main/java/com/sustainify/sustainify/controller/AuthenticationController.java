package com.sustainify.sustainify.controller;

import com.sustainify.sustainify.Model.User;
import com.sustainify.sustainify.Service.UserService;
import com.sustainify.sustainify.Util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

// @CrossOrigin(origins = "http://localhost:3000")  // Replace with your frontend URL
@RestController
@RequestMapping("/api")
public class AuthenticationController {

    private  final UserService userService;
    private  final JwtUtil jwtUtil;
    private  final AuthenticationManager authenticationManager;

    @Autowired
    public AuthenticationController(AuthenticationManager authenticationManager, JwtUtil jwtUtil, UserService userService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }
    // Endpoint for user login
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        try {
            var authenticationToken = new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword());
            var authentication = authenticationManager.authenticate(authenticationToken);
            var jwt = jwtUtil.generateToken(authentication.getName());
            return jwt;
        } catch (AuthenticationException e) {
            return "Invalid credentials";
        }
    }
}
