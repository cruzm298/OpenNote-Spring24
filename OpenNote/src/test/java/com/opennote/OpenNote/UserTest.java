package com.opennote.OpenNote;

import com.opennote.OpenNote.api.model.User;
import com.opennote.OpenNote.service.UserService;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class UserTest {

    @Test
    public void testAddUser() {
        User user = new User(1, "knagesh", "Admin@123", "knagesh@syr.edu", 1);
        UserService us = new UserService();
        User retUser = us.addUser(1, "knagesh", "Admin@123", "knagesh@syr.edu", 1);
        assertEquals(user.getUserId(), retUser.getUserId());
        // You can add additional assertions here if needed
    }

    @Test
    public void testUpdateUser() {
        //do once db integration is complete
    }

    @Test
    public void testDeleteUser() {
        //do once db integration is complete
    }

    @Test
    public void testGetUserId() {
        User user = new User(1, "knagesh", "Admin@123", "knagesh@syr.edu", 1);
        assertEquals(1, user.getUserId());
    }

    @Test
    public void testGetRoleId() {
        User user = new User(1, "knagesh", "Admin@123", "knagesh@syr.edu", 1);
        assertEquals(1, user.getRoleId());
    }

    @Test
    public void testGetUsername() {
        User user = new User(1, "knagesh", "Admin@123", "knagesh@syr.edu", 1);
        assertEquals("knagesh", user.getUsername());
    }

    @Test
    public void testGetEmail() {
        User user = new User(1, "knagesh", "Admin@123", "knagesh@syr.edu", 1);
        assertEquals("knagesh@syr.edu", user.getEmail());
    }
}
