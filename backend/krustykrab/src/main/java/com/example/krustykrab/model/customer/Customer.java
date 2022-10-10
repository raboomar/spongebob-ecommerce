package com.example.krustykrab.model.customer;

import com.amazonaws.services.dynamodbv2.datamodeling.*;
import com.example.krustykrab.model.MenuModel.Menu;
import com.example.krustykrab.model.order.Order;
import lombok.*;

import java.security.PrivateKey;
import java.util.List;

@ToString
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@DynamoDBTable(tableName = "Customers")
public class Customer {
    @DynamoDBHashKey
    @DynamoDBAutoGeneratedKey
    private String id;
    @DynamoDBAttribute
    private String name;
    @DynamoDBAttribute
    private String email;
    @DynamoDBAttribute
    private String password;

    @DynamoDBAttribute
    private List<Menu> orders;
}
