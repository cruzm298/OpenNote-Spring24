package com.opennote.OpenNote.api.controller;

import com.opennote.OpenNote.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admins")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @DeleteMapping("/users/{id}")
    public void deleteUser(@PathVariable("id") int userID) {
        adminService.deleteUser(userID);
    }

    @DeleteMapping("/notes/{id}")
    public void deleteNote(@PathVariable("id") int noteID) {
        adminService.deleteNote(noteID);
    }

    @PutMapping("/categories")
    public void manageCategories() {
        adminService.manageCategories();
    }

    @GetMapping("/statistics")
    public void viewStatistics() {
        adminService.viewStatistics();
    }
}
