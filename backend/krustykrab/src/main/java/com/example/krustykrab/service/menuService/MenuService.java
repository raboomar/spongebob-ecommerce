package com.example.krustykrab.service.menuService;

import com.example.krustykrab.config.AwsConfig;
import com.example.krustykrab.model.MenuModel.Menu;
import com.example.krustykrab.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;
    public List<Menu> getMenuItems (){
        return menuRepository.getAll();
    }

    public Menu addMenuItem(Menu menu){
        return menuRepository.addMenuItem(menu);
    }

}
