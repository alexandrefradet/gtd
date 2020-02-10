package com.fradou.gtd.back.controller;

import com.fradou.gtd.back.model.entity.Incoming;
import com.fradou.gtd.back.service.IncomingService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("incomings")
@Slf4j
@AllArgsConstructor
@CrossOrigin("*")
public class IncomingController {

    private IncomingService incomingService;

    @GetMapping
    public List<Incoming> getAllIncomings() {
        return incomingService.getAllIncomings().getContent();
    }

    @GetMapping("/{id}")
    public Incoming getIncomings(@PathVariable Long id) {
        return incomingService.getIncoming(id);
    }

    @PostMapping
    public Incoming createIncoming(@RequestBody Incoming incoming) {
        return incomingService.create(incoming);
    }

    @PutMapping("/{id}")
    public Incoming updateIncoming(@PathVariable Long id, @RequestBody Incoming incoming) {
        return incomingService.update(id, incoming);
    }

    @DeleteMapping("/{id}")
    public void deleteIncoming(@PathVariable Long id) {
        incomingService.delete(id);
    }
}
