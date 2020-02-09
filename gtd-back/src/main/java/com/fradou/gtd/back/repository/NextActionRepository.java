package com.fradou.gtd.back.repository;

import com.fradou.gtd.back.model.entity.NextAction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NextActionRepository extends JpaRepository<NextAction, Long> {

    public List<NextAction> findAllByCompleted(boolean completed);
}
