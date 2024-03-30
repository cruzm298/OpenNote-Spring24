package com.opennote.OpenNote.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/search")
public class SearchEngineController {

    @GetMapping("/notes")
    public String searchNotes(@RequestParam String keywords) {
       
        return "Results for: " + keywords;
    }

    @GetMapping("/filterByCategory")
    public String filterByCategory(@RequestParam String category) {
      
        return "Filtered by category: " + category;
    }

    @GetMapping("/sortByDate")
    public String sortByDate() {
 
        return "Sorted by Date";
    }

    @GetMapping("/sortByPopularity")
    public String sortByPopularity() {
      
        return "Sorted by Popularity";
    }
}
