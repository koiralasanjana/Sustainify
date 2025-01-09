package com.sustainify.sustainify.Service;

import com.sustainify.sustainify.Model.Reporter;
import com.sustainify.sustainify.Model.User;
import com.sustainify.sustainify.Repository.ReporterRepository;
import com.sustainify.sustainify.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;
import java.util.List;


@Service
public class ReporterService {

    @Autowired
    private ReporterRepository reporterRepository;

    @Autowired
    private UserService userService;

    public Reporter registerReporter(Reporter reporter) {
        // Step 1: Create and save the Reporter entity
        Reporter MyReporter = new Reporter();
        reporter.setName(reporter.getName());
        reporter.setEmail(reporter.getEmail());

        // Step 2: Create the corresponding User entity and associate with Reporter
        User user = userService.createUser(reporter.getEmail(), reporter.getPassword(), "reporter");
        reporter.setUser(user);

        // Step 3: Save the Reporter entity along with the User entity
        reporterRepository.save(reporter);

        return reporter;
    }
}
