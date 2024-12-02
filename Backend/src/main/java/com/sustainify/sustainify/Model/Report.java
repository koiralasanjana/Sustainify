package com.sustainify.sustainify.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "reports")
@Data
public class Report {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty(message = "Title is required")
    private String title;

    @Column(nullable = false)
    @NotEmpty(message = "Description is required")
    private String description;

    @Column(nullable = false)
    private String location; // For example: city name, district, or GPS coordinates

    @Column(nullable = false)
    private String status = "To-do"; // Default status

    @Column(name = "photo", nullable = true) // Optional field
    private String photo; // Stores the file name or path

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
    }

    @ManyToOne
    @JoinColumn(name = "reporter_id", nullable = false)
    private Reporter reporter; // Linking to the Reporter entity
}
