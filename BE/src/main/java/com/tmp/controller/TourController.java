package com.tmp.controller;

import com.tmp.dto.TourDto;
import com.tmp.dto.authen.LoginInfoDto;
import com.tmp.entity.Tour;
import com.tmp.service.ITourService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/tours")
@CrossOrigin("*")
public class TourController {
    @Autowired
    private ITourService service;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping()
    public ResponseEntity<?> getAllTours(Pageable pageable) {
        Page<Tour> entities = service.getTourPaging(pageable);
        return new ResponseEntity<>(entities, HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getTourById(@PathVariable(name = "id") int id) {
        Tour tour = service.getTourById(id);
        TourDto tourDto = modelMapper.map(tour , TourDto.class);
        tourDto.setTinh(tour.getTinh().getTenTinh());
        tourDto.setDiaDiem(tour.getDiaDiem().getDiemDen());
        return new ResponseEntity<>(tourDto, HttpStatus.OK);
    }
}
