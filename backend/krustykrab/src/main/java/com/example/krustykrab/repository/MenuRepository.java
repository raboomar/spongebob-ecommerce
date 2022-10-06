package com.example.krustykrab.repository;

import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBMapper;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBSaveExpression;
import com.amazonaws.services.dynamodbv2.datamodeling.DynamoDBScanExpression;
import com.amazonaws.services.dynamodbv2.model.AttributeValue;
import com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue;
import com.example.krustykrab.model.MenuModel.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Repository
public class MenuRepository {

    @Autowired
private DynamoDBMapper dynamoDBMapper;

    public Menu addMenuItem(Menu menu){
        dynamoDBMapper.save(menu);
        return  menu;
    }

    public List<Menu> getAll(){
        DynamoDBScanExpression scanExpression = new DynamoDBScanExpression();
        return dynamoDBMapper.scan(Menu.class, scanExpression);
     }

    public Menu findMenuItemById (String id){
        return dynamoDBMapper.load(Menu.class, id);
    }

    public String deleteMenuItem (Menu menu){
        dynamoDBMapper.delete(menu);
        return "Item removed";
    }

    public String updateMenuItem(Menu menu){
        dynamoDBMapper.save(menu,buildExpression(menu));
        return "Item updated";
    }

    private DynamoDBSaveExpression buildExpression (Menu menu){
        DynamoDBSaveExpression dynamoDBSaveExpression = new DynamoDBSaveExpression();
        Map<String, ExpectedAttributeValue> expectedMap = new HashMap<>();
        expectedMap.put("menuId", new ExpectedAttributeValue(new AttributeValue().withS(menu.getId())));
        dynamoDBSaveExpression.setExpected(expectedMap);
        return dynamoDBSaveExpression;
    }
}
