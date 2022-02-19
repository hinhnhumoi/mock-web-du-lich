package com.tmp.controller;

import com.tmp.entity.Tour;
import com.tmp.service.ITourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/v1/tours")
@CrossOrigin("*")
public class TourController {
    @Autowired
    private ITourService service;

    @GetMapping()
    public ResponseEntity<?> getAllDepartments(Pageable pageable) {
        Page<Tour> entities = service.getAllTours(pageable);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }
}
