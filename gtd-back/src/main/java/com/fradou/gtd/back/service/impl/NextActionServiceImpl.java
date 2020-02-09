package com.fradou.gtd.back.service.impl;

import com.fradou.gtd.back.model.dto.ActionSearchDto;
import com.fradou.gtd.back.model.entity.NextAction;
import com.fradou.gtd.back.repository.NextActionRepository;
import com.fradou.gtd.back.service.NextActionService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class NextActionServiceImpl implements NextActionService {

    private NextActionRepository nextActionRepository;

    @Override
    public List<NextAction> findAll(ActionSearchDto searchDto) {
        if (searchDto != null && searchDto.getCompleted() != null) {
            return nextActionRepository.findAllByCompleted(searchDto.getCompleted());
        } else {
            return nextActionRepository.findAll();
        }
    }
}
