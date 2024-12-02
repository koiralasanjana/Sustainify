package com.sustainify.sustainify.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.time.LocalDate;

@Data
@Entity
@Table(name = "organization")
public class Organization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    @NotEmpty(message = "Organization name is required")
    private String orgName;

    @Column(nullable = false)
    @NotEmpty(message = "Location is required")
    private String location;

    @Column(nullable = false, unique = true)
    @Email(message = "Invalid email format")
    private String email;

    @Column(nullable = false)
    @Past(message = "Established date must be in the past")
    private LocalDate establishedOn;

    @Column(nullable = false)
    private Boolean isProfit;

    @Column(nullable = false)
    @Pattern(regexp = "\\d{10}", message = "Contact number must be 10 digits")
    private String contactNumber;

    @Column
    private String registeredCharityNumber;

    // Contact person details
    @Column(nullable = false)
    @NotEmpty(message = "Contact person's position is required")
    private String contactPersonPosition;

    @Column(nullable = false)
    @NotEmpty(message = "Contact person's name is required")
    private String contactPersonName;

    @Column(nullable = false)
    @Pattern(regexp = "\\d{10}", message = "Contact person's phone number must be 10 digits")
    private String contactPersonPhone;

    @Column(nullable = false)
    @Email(message = "Invalid contact person's email")
    private String contactPersonEmail;

    // Alternate contact person details
    @Column
    private String altContactPersonPosition;

    @Column
    private String altContactPersonName;

    @Column
    @Pattern(regexp = "\\d{10}", message = "Alternate contact person's phone number must be 10 digits")
    private String altContactPersonPhone;

    @Column
    @Email(message = "Invalid alternate contact person's email")
    private String altContactPersonEmail;

    // Password constraints
    @Column(nullable = false)
    @NotEmpty(message = "Password is required")
    @Size(min = 8, message = "Password must be at least 8 characters long")
    private String password;
}
