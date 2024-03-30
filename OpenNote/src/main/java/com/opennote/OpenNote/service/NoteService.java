package com.opennote.OpenNote.service;

import com.opennote.OpenNote.api.model.Note;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;
import java.util.*;


@Service
public class NoteService {

    // create list of notes
    private List<Note> noteList;
    // add made up notes to list
    public NoteService(){
        noteList = new ArrayList<>();

        Note note1 = new Note(127694L, "First Note", "This is the first note", 123L, 2L, 20, 10, 5,6);
        Note note2 = new Note(363932L, "second Note", "This is the second note", 674L, 3L, 67, 40, 20, 30);

        noteList.addAll(Arrays.asList(note1, note2));
    }

    public Optional<Note> getNote(Long noteId){
        Optional optional = Optional.empty();
        for (Note note: noteList){
            if(noteId == note.getNoteID()) {
                optional = Optional.of(note);
                return optional;
            }
        }
        return optional;
    }
}
