package com.fradou.gtd.back.repository;

import com.fradou.gtd.back.model.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
