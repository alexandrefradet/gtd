package com.fradou.gtd.back.utils;

import com.fradou.gtd.back.model.entity.Note;
import com.fradou.gtd.back.model.entity.Project;
import com.fradou.gtd.back.model.entity.ProjectStep;
import com.fradou.gtd.back.model.entity.enums.EProjectStatus;
import com.fradou.gtd.back.repository.NoteRepository;
import com.fradou.gtd.back.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.stream.Stream;

@Component
public class DbTestLoader implements ApplicationRunner {

    @Autowired
    private NoteRepository noteRepository;

    @Autowired
    private ProjectRepository projectRepository;

    Project curProj;

    @Override
    public void run(ApplicationArguments args) throws Exception {
        var notes = Stream.of(1,2,3,4,5,6)
                .map(id -> Note.builder().id(Long.valueOf(id)).title("title-" + id).content("content-" + id).build())
                .collect(Collectors.toList());
        noteRepository.saveAll(notes);

        var projects = Stream.of(1,2,3,4,5,6)
                .map(id -> Project.builder()
                        .id(Long.valueOf(id))
                        .creationDate(LocalDate.now().minusWeeks(id))
                        .name("Project - " + id)
                        .status(getRandomStatus())
                        .build())
                .peek(project -> this.curProj = project)
                .peek(project -> project.setSteps(
                        IntStream.range(0, ((Double)(Math.random()*4)).intValue())
                                .mapToObj(stepPos -> ProjectStep.builder()
                                        .label("step - " + stepPos)
                                        .stepPosition(stepPos)
                                        .completed(false)
                                        .build())
                                .peek(projectStep -> projectStep.setProject(this.curProj))
                                .collect(Collectors.toList())
                ))
                .collect(Collectors.toList());
        projectRepository.saveAll(projects);
    }

    private EProjectStatus getRandomStatus() {
        List<String> values = Arrays.stream(EProjectStatus.values()).map(EProjectStatus::toString).collect(Collectors.toList());
        Double rand = Math.random()*4;
        return EProjectStatus.valueOf(values.get(rand.intValue()));
    }
}
