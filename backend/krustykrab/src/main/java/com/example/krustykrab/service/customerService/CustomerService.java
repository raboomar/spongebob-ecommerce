package com.example.krustykrab.service.customerService;

import com.example.krustykrab.model.MenuModel.Menu;
import com.example.krustykrab.model.customer.Customer;
import com.example.krustykrab.repository.customerRepository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public Customer addCustomer(Customer customer){
         if (customer.getOrders() == null){
             List<Menu> emptyList = new ArrayList<>();
             customer.setOrders(emptyList);
         }
        return customerRepository.addCustomer(customer);
    }
}
