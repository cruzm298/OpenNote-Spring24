package com.opennote.OpenNote;

import com.opennote.OpenNote.api.model.SearchEngine;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class SearchEngineTest {

    @Test
    public void testSearchEngineCreation() {
        SearchEngine searchEngine = new SearchEngine("Java");
        assertEquals("Java", searchEngine.getKeywords());
    }

    @Test
    public void testSetKeywords() {
        SearchEngine searchEngine = new SearchEngine("Java");
        searchEngine.setKeywords("Spring Boot");
        assertEquals("Spring Boot", searchEngine.getKeywords());
    }
}
