package com.fradou.gtd.back.repository;

import com.fradou.gtd.back.model.entity.Incoming;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IncomingRepository extends JpaRepository<Incoming, Long> {
}
