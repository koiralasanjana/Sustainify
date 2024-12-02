package com.sustainify.sustainify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication(scanBasePackages = "com.sustainify.sustainify")
@RestController
public class SustainifyApplication {
	public static void main(String[] args) {
		SpringApplication.run(SustainifyApplication.class, args);
	}

	// @CrossOrigin
	// @GetMapping("/hello")
	// public String hello(@RequestParam (value = "name", defaultValue = "springboot") String name){
	// 	return String.format("Hello %", name);
	// }
}
