package com.sustainify.sustainify.controller;

import com.sustainify.sustainify.Model.Reporter;
import com.sustainify.sustainify.Service.ReporterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/register")
public class ReporterController {

    @Autowired
    private ReporterService reporterService;

    @PostMapping
    public ResponseEntity<String> registerReporter(@RequestBody Reporter reporter){
        try{
            reporterService.registerReporter(reporter);
            return ResponseEntity.ok("User registered successfully!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: "+e.getMessage());
        }
    }

}
