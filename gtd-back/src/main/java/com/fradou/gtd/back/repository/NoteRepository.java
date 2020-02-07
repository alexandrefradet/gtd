package com.fradou.gtd.back.repository;

import com.fradou.gtd.back.model.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Long> {
}
