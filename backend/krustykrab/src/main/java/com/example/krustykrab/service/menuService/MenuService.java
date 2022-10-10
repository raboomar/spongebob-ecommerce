package com.example.krustykrab.service.menuService;

import com.example.krustykrab.model.MenuModel.Menu;
import com.example.krustykrab.repository.menuRepository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    @Autowired
    private MenuRepository menuRepository;
    public List<Menu> getMenuItems (){
        return menuRepository.getAll();
    }

    public Menu getMenuItem (String id){
        return menuRepository.findMenuItemById(id);
    }
    public Menu addMenuItem(Menu menu){
        return menuRepository.addMenuItem(menu);
    }


    public String batchAdd(List<Menu> menus){
        return menuRepository.batchAdd(menus);
    }
}
