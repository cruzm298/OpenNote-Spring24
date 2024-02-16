package com.opennote.OpenNote.api.controller;

import com.opennote.OpenNote.api.model.Note;
import com.opennote.OpenNote.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class NoteController {

    private NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService){
        this.noteService = noteService;
    }

    @GetMapping // makes get calls to this api setup
    // get note method
    public Note getNote(@RequestParam Long noteId){
        Optional note = noteService.getNote(noteId);
        if(note.isPresent()){
            return (Note) note.get();
        }
        return null;
    }
}
