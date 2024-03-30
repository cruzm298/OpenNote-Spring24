package com.opennote.OpenNote.service;

import org.springframework.stereotype.Service;

@Service
public class AdminService {

    public void deleteUser(int userID) {
        // Implementation to delete user
        System.out.println("User with ID " + userID + " deleted successfully!");
    }

    public void deleteNote(int noteID) {
        // Implementation to delete note
        System.out.println("Note with ID " + noteID + " deleted successfully!");
    }

    public void manageCategories() {
        // Implementation to manage categories
        System.out.println("Categories managed successfully!");
    }

    public void viewStatistics() {
        // Implementation to view statistics
        System.out.println("Viewing statistics...");
    }
}
