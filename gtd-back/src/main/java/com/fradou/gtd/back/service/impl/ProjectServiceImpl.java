package com.fradou.gtd.back.service.impl;

import com.fradou.gtd.back.model.entity.Project;
import com.fradou.gtd.back.repository.ProjectRepository;
import com.fradou.gtd.back.service.ProjectService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository projectRepository;

    public Page<Project> getAllProjects() {
        return projectRepository.findAll(Pageable.unpaged());
    }

    @Override
    public Project getProject(Long id) {
        // TODO throw exception / other
        return projectRepository.findById(id).orElse(new Project());
    }

    @Override
    public void delete(Long id) {
        this.projectRepository.deleteById(id);
    }

    @Override
    public Project update(Long id, Project project) {
        if (id == null || !id.equals(project.getId())) {
            throw new RuntimeException("No");
        }
        return this.projectRepository.save(project);
    }

    @Override
    public Project create(Project project) {
        return this.projectRepository.save(project);
    }
}
