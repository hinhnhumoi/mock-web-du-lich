package com.tmp.service;

import com.tmp.entity.Tour;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ITourService {
    Page<Tour> getAllTours(Pageable pageable);
}
