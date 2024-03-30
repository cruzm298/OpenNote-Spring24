package com.opennote.OpenNote;

import com.opennote.OpenNote.api.model.Note;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class NoteTest {

    // intialize object
    Note note;

    // method creates new object before each test
    @BeforeEach
    void setup(){
        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
    }

    @Test
    public void testGetNoteID(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(127694, note.getNoteID());
    }

    @Test
    public void testGetTitle(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals("First Note", note.getTitle());
    }

    @Test
    public void testGetContent(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals("This is the first note", note.getContent());
    }

    @Test
    public void testGetAuthorID(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(123, note.getAuthorID());
    }

    /*
    @Test
    public void testGetCreationDate(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(127694, note.getCreationDate());
    }*/

    @Test
    public void testGetCategoryID(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(2, note.getCategoryID());
    }

    @Test
    public void testGetViewCount(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(20, note.getViewCount());
    }

    @Test
    public void testGetDownloadCount(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(10, note.getDownloadCount());
    }

    @Test
    public void testGetUpVote(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(5, note.getUpVote());
    }

    @Test
    public void testGetDownVote(){
//        note = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        assertEquals(6, note.getDownVote());
    }
}
