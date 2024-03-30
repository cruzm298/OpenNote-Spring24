package com.opennote.OpenNote;

import com.opennote.OpenNote.api.model.Role;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class RoleTest {

    @Test
    public void testRoleCreation() {
        Role role = new Role(1, "Admin", "Has full access");
        assertEquals(1, role.getRoleId());
        assertEquals("Admin", role.getRoleName());
        assertEquals("Has full access", role.getDescription());
    }

    @Test
    public void testSetRoleId() {
        Role role = new Role(1, "Admin", "Has full access");
        role.setRoleId(2);
        assertEquals(2, role.getRoleId());
    }

    @Test
    public void testSetRoleName() {
        Role role = new Role(1, "Admin", "Has full access");
        role.setRoleName("Editor");
        assertEquals("Editor", role.getRoleName());
    }

    @Test
    public void testSetDescription() {
        Role role = new Role(1, "Admin", "Has full access");
        role.setDescription("Can edit and delete notes");
        assertEquals("Can edit and delete notes", role.getDescription());
    }
}
