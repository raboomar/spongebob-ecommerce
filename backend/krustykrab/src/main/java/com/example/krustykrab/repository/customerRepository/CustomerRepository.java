package com.example.krustykrab.repository.customerRepository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.example.krustykrab.model.customer.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CustomerRepository {

    @Autowired
    private DynamoDBMapper dynamoDBMapper;

    public Customer addCustomer (Customer customer){
        dynamoDBMapper.save(customer);
        return customer;
    }
}
