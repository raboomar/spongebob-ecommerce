package com.example.krustykrab.controller.customerController;

import com.example.krustykrab.model.customer.Customer;
import com.example.krustykrab.service.customerService.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path="api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @CrossOrigin
    @PostMapping("/add")
    public Customer addCustomer(@RequestBody Customer customer){
        return customerService.addCustomer(customer);
    }
}
