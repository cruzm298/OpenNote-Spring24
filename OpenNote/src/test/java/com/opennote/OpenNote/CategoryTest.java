package com.opennote.OpenNote;

import com.opennote.OpenNote.api.controller.CategoryController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


@SpringBootTest
public class CategoryTest {

    @Autowired
    private CategoryController categoryController;

    @Test
    void contextLoads() throws Exception{
        assertThat(categoryController).isNotNull();
    }
}
