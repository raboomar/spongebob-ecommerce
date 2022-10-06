package com.example.krustykrab.config;

import lombok.Getter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
@PropertySource("classpath:application.properties")
@Getter

public class AwsConfig {
    @Value("${aws}${region}")
    private String region;

    @Value("${aws}${access-key}")
    private String accessKey;

    @Value("${aws}${secret-key}")
    private String secretKey;

    @Value("${aws}${endpoint}")
    private String endpoint;
}
