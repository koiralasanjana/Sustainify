package com.sustainify.sustainify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@SpringBootApplication(scanBasePackages = "com.sustainify.sustainify")
@EntityScan(basePackages = "com.sustainify.sustainify.Model")
@RestController
public class SustainifyApplication {
	public static void main(String[] args) {
		SpringApplication.run(SustainifyApplication.class, args);
	}

}
