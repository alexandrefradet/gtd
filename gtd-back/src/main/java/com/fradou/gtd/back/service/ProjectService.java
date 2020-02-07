package com.fradou.gtd.back.service;

import com.fradou.gtd.back.model.entity.Project;
import org.springframework.data.domain.Page;

public interface ProjectService {
    Page<Project> getAllProjects();

    Project getProject(Long id);

    Project create(Project project);

    Project update(Long id, Project project);

    void delete(Long id);
}
