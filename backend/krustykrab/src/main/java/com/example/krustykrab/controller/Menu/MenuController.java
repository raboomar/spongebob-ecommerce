package com.example.krustykrab.controller.Menu;

import com.example.krustykrab.model.MenuModel.Menu;
import com.example.krustykrab.service.menuService.MenuService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping(path="api/v1/menu")
public class MenuController {
    private final MenuService menuService;

    @CrossOrigin
    @GetMapping
    public List<Menu> getMenuItems(){
        return menuService.getMenuItems();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Menu getMenuItem(@PathVariable String id){
        return menuService.getMenuItem(id);
    }


    @CrossOrigin
    @PostMapping("/add")
    public Menu addMenuItem(@RequestBody Menu menu){
        return menuService.addMenuItem(menu);
    }

    @CrossOrigin
    @PostMapping("/batch")
    public String batchAdd(@RequestBody List<Menu> menus){
        return menuService.batchAdd(menus);
    }
}
