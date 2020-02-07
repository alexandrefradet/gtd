package com.fradou.gtd.back.service;

import com.fradou.gtd.back.model.entity.Note;
import org.springframework.data.domain.Page;

public interface NoteService {

    Page<Note> getAllNotes();

    Note getNote(Long id);

    void delete(Long id);

    Note update(Long id, Note note);

    Note create(Note note);
}
