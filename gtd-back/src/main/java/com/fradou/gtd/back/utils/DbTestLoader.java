package com.fradou.gtd.back.utils;

import com.fradou.gtd.back.model.entity.Note;
import com.fradou.gtd.back.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.stream.Collectors;

@Component
public class DbTestLoader implements ApplicationRunner {

    @Autowired
    private NoteRepository noteRepository;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        var notes = Arrays.asList(1,2,3,4,5,6).stream()
                .map(id -> Note.builder().id(Long.valueOf(id)).title("title-" + id).content("content-" + id).build())
                .collect(Collectors.toList());
        noteRepository.saveAll(notes);
    }
}
