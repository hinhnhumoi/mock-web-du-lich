package com.tmp.service.impl;

import com.tmp.entity.Tour;
import com.tmp.repository.ITourRepository;
import com.tmp.service.ITourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TourService implements ITourService {
    @Autowired
    private ITourRepository tourRepository;

    @Override
    public Page<Tour> getTourPaging(Pageable pageable) {
        return tourRepository.findAll(pageable);
    }

    @Override
    public Tour getTourById(int id) {
        return tourRepository.findById(id).get();
    }
}