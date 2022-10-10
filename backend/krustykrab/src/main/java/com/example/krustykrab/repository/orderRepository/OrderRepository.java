package com.example.krustykrab.repository.orderRepository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBQueryExpression;
import com.amazonaws.services.dynamodbv2.document.spec.QuerySpec;
import com.example.krustykrab.model.MenuModel.Menu;
import com.example.krustykrab.model.customer.Customer;
import com.example.krustykrab.model.order.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class OrderRepository {
   @Autowired
    private  DynamoDBMapper dynamoDBMapper;

    public Order addOrder (Order order){
        if(!order.getCustomerId().equals("Guest")){
        Customer customer = new Customer();
        customer.setId(order.getCustomerId());
        Customer selected = dynamoDBMapper.load(customer);
        List<Menu> customerOrders = selected.getOrders();
        List<Menu> newOrder = order.getOrdered();
        customerOrders.addAll(newOrder);
        selected.setOrders(customerOrders);
        dynamoDBMapper.save(selected);
        dynamoDBMapper.save(order);
        }else {
            dynamoDBMapper.save(order);
        }

        return order;
    }
}
