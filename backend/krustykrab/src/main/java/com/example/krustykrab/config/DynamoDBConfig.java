package com.example.krustykrab.config;

import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.client.builder.AwsClientBuilder;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapperConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@RequiredArgsConstructor
@Configuration
public class DynamoDBConfig {

    @Autowired
    private final AwsConfig awsConfig;

    public AWSCredentialsProvider amazonAWSCredentialsProvider(){
    return new AWSStaticCredentialsProvider(new BasicAWSCredentials(awsConfig.getAccessKey(), awsConfig.getSecretKey()));
    }

    @Bean
    public DynamoDBMapperConfig dynamoDBMapperConfig(){
    return DynamoDBMapperConfig.DEFAULT;
}

    @Bean
    public DynamoDBMapper dynamoDBMapper(AmazonDynamoDB amazonDynamoDB, DynamoDBMapperConfig config){
        return new DynamoDBMapper(amazonDynamoDB,config);
    }

    @Bean
    public AmazonDynamoDB amazonDynamoDB(){
    return AmazonDynamoDBClientBuilder.standard().withCredentials(amazonAWSCredentialsProvider()).withEndpointConfiguration(
            new AwsClientBuilder.EndpointConfiguration(awsConfig.getEndpoint(),awsConfig.getRegion())
    ).build();
    }


}
