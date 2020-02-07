package com.fradou.gtd.back.service.impl;

import com.fradou.gtd.back.model.entity.Note;
import com.fradou.gtd.back.repository.NoteRepository;
import com.fradou.gtd.back.service.NoteService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class NoteServiceImpl implements NoteService {

    private NoteRepository noteRepository;

    public Page<Note> getAllNotes() {
        return noteRepository.findAll(Pageable.unpaged());
    }

    @Override
    public Note getNote(Long id) {
        return noteRepository.findById(id).orElse(new Note());
    }

    @Override
    public void delete(Long id) {
        this.noteRepository.deleteById(id);
    }

    @Override
    public Note update(Long id, Note note) {
        if (id == null || !id.equals(note.getId())) {
            throw new RuntimeException("No");
        }
        return this.noteRepository.save(note);
    }

    @Override
    public Note create(Note note) {
        return this.noteRepository.save(note);
    }
}
