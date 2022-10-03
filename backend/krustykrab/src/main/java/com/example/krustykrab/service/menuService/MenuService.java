package com.example.krustykrab.service.menuService;

import com.example.krustykrab.model.MenuModel.KKMenu;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MenuService {


    public List<KKMenu> getMenuItems (){
   KKMenu krabbyPatty = new KKMenu(1l,"Krabby Patty", "https://cdn.mos.cms.futurecdn.net/28Ltb9FTfcnKzLb5yfLsKi-970-80.jpg.webp", 5.99,14l);
       List<KKMenu> menu = new ArrayList();
       menu.add(krabbyPatty);
       return menu;
    }
}
