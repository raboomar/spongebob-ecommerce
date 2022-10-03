package com.example.krustykrab.controller.KKMenu;

import com.example.krustykrab.model.MenuModel.KKMenu;
import com.example.krustykrab.service.menuService.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path="api/v1/menu")
public class KKMenuController {
private final MenuService menuService;

@CrossOrigin
    @GetMapping
    public List<KKMenu> getMenuItems(){
        return menuService.getMenuItems();
    }
}
