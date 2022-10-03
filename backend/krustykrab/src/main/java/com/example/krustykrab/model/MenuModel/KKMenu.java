package com.example.krustykrab.model.MenuModel;

import lombok.*;

@ToString
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class KKMenu {
    private Long id;
    private String name;
    private String imgUrl;
    private Double price;
    private Long availableQty;

}
