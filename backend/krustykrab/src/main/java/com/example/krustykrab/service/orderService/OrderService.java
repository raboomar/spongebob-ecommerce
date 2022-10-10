package com.example.krustykrab.service.orderService;

import com.example.krustykrab.model.order.Order;
import com.example.krustykrab.repository.orderRepository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private  OrderRepository orderRepository;

    public Order addOrder(Order order){
        return orderRepository.addOrder(order);
    }
}
