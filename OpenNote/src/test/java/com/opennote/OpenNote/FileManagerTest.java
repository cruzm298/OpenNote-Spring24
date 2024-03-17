package com.opennote.OpenNote;

import com.opennote.OpenNote.api.model.FileManager;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class FileManagerTest {

    // initialize object
    FileManager file;

    // Junit testing
    @Test
    public void testGetFileID(){
        file = new FileManager(192919L,  128382L, "File 1",  "pdf",  388L);
        assertEquals(192919, file.getFileID());
    }

    @Test
    public void testGetNoteID(){
        file = new FileManager(192919L,  128382L, "File 1",  "pdf",  388L);
        assertEquals(128382, file.getNoteID());
    }

    @Test
    public void testGetFileName(){
        file = new FileManager(192919L,  128382L, "File 1",  "pdf",  388L);
        assertEquals("File 1", file.getFileName());
    }

    @Test
    public void testGetFileType(){
        file = new FileManager(192919L,  128382L, "File 1",  "pdf",  388L);
        assertEquals("pdf", file.getFileType());
    }

    @Test
    public void testGetFileSize(){
        file = new FileManager(192919L,  128382L, "File 1",  "pdf",  388L);
        assertEquals(388, file.getFileSize());
    }

    // additional testing methods would go underneath here
}
