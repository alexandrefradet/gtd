package com.fradou.gtd.back.controller;

import com.fradou.gtd.back.model.dto.ActionSearchDto;
import com.fradou.gtd.back.model.entity.NextAction;
import com.fradou.gtd.back.service.NextActionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("nextActions")
@AllArgsConstructor
public class NextActionController {

    private NextActionService nextActionService;

    @GetMapping
    public List<NextAction> getNextAction(@RequestBody(required = false) ActionSearchDto actionSearchDto) {
        return this.nextActionService.findAll(actionSearchDto);
    }
}
