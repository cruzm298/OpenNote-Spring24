package com.opennote.OpenNote.api.model;

public class Admin extends User {

    public Admin(int userID, String username, String email) {
//        super(userID, username, email);
    }

    // Method to delete a user
    public void deleteUser(User user) {
        // Implementation to delete user
        System.out.println("User " + user.getUsername() + " deleted successfully!");
    }

    // Method to delete a note
    public void deleteNote(Note note) {
        // Implementation to delete note
        System.out.println("Note with ID " + note.getNoteID() + " deleted successfully!");
    }

    // Method to manage categories
    public void manageCategories() {
        // Implementation to manage categories
        System.out.println("Categories managed successfully!");
    }

    // Method to view statistics
    public void viewStatistics() {
        // Implementation to view statistics
        System.out.println("Viewing statistics...");
    }
}
