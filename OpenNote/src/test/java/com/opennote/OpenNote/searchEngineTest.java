package com.opennote.OpenNote;

import com.opennote.OpenNote.api.controller.SearchEngineController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class SearchEngineTest {

    @Autowired
    private SearchEngineController searchEngineController;

    @Test
    void contextLoads() throws Exception {
        assertThat(searchEngineController).isNotNull();
    }
}
