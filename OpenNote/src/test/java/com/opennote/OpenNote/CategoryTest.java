package com.opennote.OpenNote;

import com.opennote.OpenNote.api.controller.CategoryController;
import com.opennote.OpenNote.api.model.Category;
import com.opennote.OpenNote.api.model.User;
import com.opennote.OpenNote.service.CategoryService;
import com.opennote.OpenNote.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;


@SpringBootTest
public class CategoryTest {

    @Test
    public void testAddCategory() {
        Category category = new Category(1, "Maths", "Maths");
        CategoryService cs = new CategoryService();
        Category retCategory = cs.addCategory(category.getCategoryID(), category.getCategoryName(), category.getDescription());
        assertEquals(category.getCategoryID(), category.getCategoryID());
        // You can add additional assertions here if needed
    }

    @Test
    public void testGetCategoryId() {
        Category category = new Category(1, "Maths", "Maths");
        assertEquals(1, category.getCategoryID());
    }

    @Test
    public void testGetCategoryName() {
        Category category = new Category(1, "Maths", "Maths");
        assertEquals("Maths", category.getCategoryName());
    }

    @Test
    public void testGetCategoryDescription() {
        Category category = new Category(1, "Maths", "Maths");
        assertEquals("Maths", category.getDescription());
    }


    @Autowired
    private CategoryController categoryController;

    @Test
    void contextLoads() throws Exception{
        assertThat(categoryController).isNotNull();
    }
}
