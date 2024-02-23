package com.opennote.OpenNote;

import com.opennote.OpenNote.api.model.Comment;
import org.junit.jupiter.api.Test;
import static org.junit.Assert.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CommentTest {

    @Test
    public void testPostComment() {
        Comment comment = new Comment(1, 1, 1, "This is a sample comment.");
        comment.postComment();
        // You can add additional assertions here if needed
    }

    @Test
    public void testEditComment() {
        Comment comment = new Comment(1, 1, 1, "This is a sample comment.");
        comment.editComment("This is the edited comment.");
        assertEquals("This is the edited comment.", comment.getContent());
    }

    @Test
    public void testDeleteComment() {
        Comment comment = new Comment(1, 1, 1, "This is a sample comment.");
        comment.deleteComment();
        // You can add additional assertions here if needed
    }

    @Test
    public void testGetCommentID() {
        Comment comment = new Comment(1, 1, 1, "This is a sample comment.");
        assertEquals(1, comment.getCommentID());
    }

    @Test
    public void testGetNoteID() {
        Comment comment = new Comment(1, 2, 1, "This is a sample comment.");
        assertEquals(2, comment.getNoteID());
    }

    @Test
    public void testGetAuthorID() {
        Comment comment = new Comment(1, 1, 3, "This is a sample comment.");
        assertEquals(3, comment.getAuthorID());
    }

    @Test
    public void testGetContent() {
        Comment comment = new Comment(1, 1, 1, "This is a sample comment.");
        assertEquals("This is a sample comment.", comment.getContent());
    }

    @Test
    public void testCreationDate() {
        Comment comment = new Comment(1, 1, 1, "This is a sample comment.");
        assertNotNull(comment.getCreationDate());
    }

    // You can add more test cases here if needed
}
