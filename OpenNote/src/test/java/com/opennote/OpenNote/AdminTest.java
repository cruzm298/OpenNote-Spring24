import org.junit.Test;
import static org.junit.Assert.*;

public class AdminTest {

    @Test
    public void testDeleteUser() {
        Admin admin = new Admin(1, "admin", "admin@example.com");
        User user = new User(2, "user", "user@example.com");
        admin.deleteUser(user);
        // Add assertion if needed
    }

    @Test
    public void testDeleteNote() {
        Admin admin = new Admin(1, "admin", "admin@example.com");
        Note note = new Note(1, "Note content", "Math", 2);
        admin.deleteNote(note);
        // Add assertion if needed
    }

    @Test
    public void testManageCategories() {
        Admin admin = new Admin(1, "admin", "admin@example.com");
        admin.manageCategories();
        // Add assertion if needed
    }

    @Test
    public void testViewStatistics() {
        Admin admin = new Admin(1, "admin", "admin@example.com");
        admin.viewStatistics();
        // Add assertion if needed
    }

    // Add more test cases here if needed
}
