package com.sustainify.sustainify.Util;

import java.security.Key;
import java.time.Instant;
import java.util.Date;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

public class JwtUtil {
    private final String secretKey = "mysecretkey123@456"; // Use a strong secret key

    // Generate a Key object from the secret key
    private Key getSigningKey() {
        byte[] keyBytes = secretKey.getBytes();
        return Keys.hmacShaKeyFor(keyBytes);
    }

    // Generate JWT token
    public String generateToken(String username) {
        Instant now = Instant.now();
        return Jwts.builder()
                .claim("sub", username) // Use 'claim' instead of 'setSubject'
                .claim("iat", Date.from(now)) // Issue At
                .claim("exp", Date.from(now.plusSeconds(3600))) // Expiration Time (1 hour)
                .signWith(getSigningKey()) // Use the Key instance
                .compact();
    }
}
