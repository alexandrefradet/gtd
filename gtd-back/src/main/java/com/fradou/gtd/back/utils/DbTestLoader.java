package com.fradou.gtd.back.utils;

import com.fradou.gtd.back.model.entity.NextAction;
import com.fradou.gtd.back.model.entity.Note;
import com.fradou.gtd.back.model.entity.Project;
import com.fradou.gtd.back.model.entity.enums.EProjectStatus;
import com.fradou.gtd.back.repository.NextActionRepository;
import com.fradou.gtd.back.repository.NoteRepository;
import com.fradou.gtd.back.repository.ProjectRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@Component
@AllArgsConstructor
public class DbTestLoader implements ApplicationRunner {

    private NoteRepository noteRepository;

    private ProjectRepository projectRepository;

    private NextActionRepository nextActionRepository;

    @Autowired
    public DbTestLoader(NoteRepository noteRepository, ProjectRepository projectRepository, NextActionRepository nextActionRepository) {
        this.noteRepository = noteRepository;
        this.projectRepository = projectRepository;
        this.nextActionRepository = nextActionRepository;
    }

    Project curProj = new Project();

    @Override
    public void run(ApplicationArguments args) throws Exception {
        var notes = Stream.of(1,2,3,4,5,6)
                .map(id -> Note.builder().id(Long.valueOf(id)).title("title-" + id).content("content-" + id).build())
                .collect(Collectors.toList());
        noteRepository.saveAll(notes);

        var projects = Stream.of(1,2,3,4,5,6)
                .map(id -> Project.builder()
                        .id(Long.valueOf(id))
                        .creationDate(LocalDateTime.now().minusWeeks(id))
                        .name("Project - " + id)
                        .status(getRandomStatus())
                        .build())
                .peek(project -> this.curProj = project)
                .peek(project -> project.setActions(
                        IntStream.range(0, ((Double)(Math.random()*4)).intValue())
                                .mapToObj(stepPos -> NextAction.builder()
                                        .label("step - " + stepPos)
                                        .actionPosition(stepPos)
                                        .completed(getRandomBoolean())
                                        .build())
                                .peek(projectStep -> projectStep.setProject(this.curProj))
                                .collect(Collectors.toList())
                ))
                .collect(Collectors.toList());
        projectRepository.saveAll(projects);

        var isolatedActions = Stream.of(1,2,3,4,5,6)
                .map(id -> NextAction.builder()
                        .completed(getRandomBoolean())
                        .label("Isolated Action " + id)
                        .build()
                )
                .collect(Collectors.toList());

        nextActionRepository.saveAll(isolatedActions);
    }

    private EProjectStatus getRandomStatus() {
        List<String> values = Arrays.stream(EProjectStatus.values()).map(EProjectStatus::toString).collect(Collectors.toList());
        Double rand = Math.random()*4;
        return EProjectStatus.valueOf(values.get(rand.intValue()));
    }

    private boolean getRandomBoolean() {
        Random rd = new Random();
        return rd.nextBoolean();
    }
}
