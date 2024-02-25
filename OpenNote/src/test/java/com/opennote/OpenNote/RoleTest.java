package com.opennote.OpenNote;

import com.opennote.OpenNote.api.controller.RoleController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class RoleTest {

    @Autowired
    private RoleController roleController;

    @Test
    void contextLoads() throws Exception {
        // This test checks if the RoleController is correctly loaded by the Spring container
        assertThat(roleController).isNotNull();
    }
}
