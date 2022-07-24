package com.greencommute.locationservice.service;

import com.greencommute.locationservice.dao.LocationRepository;
import com.greencommute.locationservice.entity.Location;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LocationServiceImpl implements LocationService {

    @Autowired
    private LocationRepository locationRepository;

    @Override
    public List<Location> findAll() {
        return locationRepository.findAll();
    }

    @Override
    public Optional<Location> findLocationById(int id) {
        return locationRepository.findById(id);
    }

    @Override
    public void deleteById(int id) {
        locationRepository.deleteById(id);
    }

    @Override
    public Location saveLocation(Location location) {
        return locationRepository.save(location);
    }
}
