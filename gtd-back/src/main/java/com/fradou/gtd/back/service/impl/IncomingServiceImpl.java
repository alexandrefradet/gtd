package com.fradou.gtd.back.service.impl;

import com.fradou.gtd.back.model.entity.Incoming;
import com.fradou.gtd.back.repository.IncomingRepository;
import com.fradou.gtd.back.service.IncomingService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class IncomingServiceImpl implements IncomingService {

    private IncomingRepository incomingRepository;

    public Page<Incoming> getAllIncomings() {
        return incomingRepository.findAll(Pageable.unpaged());
    }

    @Override
    public Incoming getIncoming(Long id) {
        return incomingRepository.findById(id).orElse(new Incoming());
    }

    @Override
    public void delete(Long id) {
        this.incomingRepository.deleteById(id);
    }

    @Override
    public Incoming update(Long id, Incoming incoming) {
        if (id == null || !id.equals(incoming.getId())) {
            throw new RuntimeException("No");
        }
        return this.incomingRepository.save(incoming);
    }

    @Override
    public Incoming create(Incoming incoming) {
        return this.incomingRepository.save(incoming);
    }
}
