package com.opennote.OpenNote.service;

import com.opennote.OpenNote.api.model.Note;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Optional;

@Service
public class NoteService {

    // create list of notes
    private List<Note> noteList;
    // add made up notes to list
    public NoteService(){
        noteList = new ArrayList<>();

        Note note1 = new Note(noteID: 12345678910, title: "First Note", content: "This is the first note", authorID: 123, categoryID: 2, viewCount: 20, donwloadCount: 10, upVote: 5, downVote: 6);
        Note note2 = new Note(noteID: 36374748388, title: "second Note", content: "This is the second note", authorID: 674, categoryID: 3, viewCount: 67, donwloadCount: 40, upVote: 20, downVote: 30);

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
