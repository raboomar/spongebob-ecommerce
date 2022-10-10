package com.example.krustykrab.translators;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverted;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBTypeConverter;
import com.example.krustykrab.model.customer.Customer;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.lang.annotation.Annotation;

public class CustomerTranslator implements DynamoDBTypeConverter<String, Customer> {

    private static final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convert(Customer customer) {
        try{
            return mapper.writeValueAsString(customer);
        }catch(JsonProcessingException e){
            throw new RuntimeException(e);
        }
    }

    @Override
    public Customer unconvert(String s) {
        try{
            return mapper.readValue(s, Customer.class);
        }catch (Exception e){
            throw new RuntimeException(e);
        }
    }
}
