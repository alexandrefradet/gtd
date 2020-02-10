package com.fradou.gtd.back.service;

import com.fradou.gtd.back.model.entity.Incoming;
import org.springframework.data.domain.Page;

public interface IncomingService {

    Page<Incoming> getAllIncomings();

    Incoming getIncoming(Long id);

    void delete(Long id);

    Incoming update(Long id, Incoming incoming);

    Incoming create(Incoming incoming);
}
