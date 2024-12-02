package com.sustainify.sustainify.Service;
import com.sustainify.sustainify.Model.Reporter;
import com.sustainify.sustainify.Repository.ReporterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReporterService {

    @Autowired
    private ReporterRepository reporterRepository;
    
    public Reporter registerReporter(Reporter reporter) {
        if (reporter.getName() == null || reporter.getEmail() == null || reporter.getPassword() == null) {
            throw new IllegalArgumentException("Name, email, and password must not be null.");
        }
        return reporterRepository.save(reporter);
    }
}

