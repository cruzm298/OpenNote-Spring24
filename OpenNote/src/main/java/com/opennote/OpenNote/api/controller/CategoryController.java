package com.opennote.OpenNote.api.controller;

import com.opennote.OpenNote.api.model.Category;
import com.opennote.OpenNote.service.CategoryService;
import com.opennote.OpenNote.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class CategoryController {
    private CategoryService categoryService;
    @Autowired
    public  CategoryController(CategoryService categoryService){ this.categoryService = categoryService;}
    @GetMapping("/category")
    public Category getCategory(@RequestParam Integer categoryId) {
        Optional category = this.categoryService.getCategory(categoryId);
        if (category.isPresent()) return (Category) category.get();
        return null;
    }
//
    @GetMapping("/categoryset")
    public void setCategory() {
        this.categoryService.initializeCategories();
    }
}
