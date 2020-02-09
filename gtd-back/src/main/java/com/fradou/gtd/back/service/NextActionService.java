package com.fradou.gtd.back.service;

import com.fradou.gtd.back.model.dto.ActionSearchDto;
import com.fradou.gtd.back.model.entity.NextAction;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface NextActionService {
    List<NextAction> findAll(ActionSearchDto completed);
}
