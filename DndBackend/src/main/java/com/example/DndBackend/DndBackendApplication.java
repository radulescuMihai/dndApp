package com.example.DndBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories("com.example.DndBackend")
public class DndBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(DndBackendApplication.class, args);
	}

}
