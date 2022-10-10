package com.example.krustykrab.controller.order;

import com.example.krustykrab.model.order.Order;
import com.example.krustykrab.service.orderService.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@AllArgsConstructor

@RestController
@RequestMapping(path = "api/v1/order")
public class OrderController {
    private final OrderService orderService;


    @CrossOrigin
    @PostMapping("/add")
    public Order addOrder(@RequestBody Order order){
        return orderService.addOrder(order);
    }

}
