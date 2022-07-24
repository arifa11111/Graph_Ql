package com.greencommute.locationservice.controller;

import com.greencommute.locationservice.entity.Location;
import com.greencommute.locationservice.exception.UserNotFoundException;
import com.greencommute.locationservice.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class locationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/locations")
    public List<Location> allcities() {
        return  locationService.findAll();
    }
    @GetMapping("/locations/{id}")
    public Optional<Location> findLocationById(@PathVariable("id") int id) {
        if(!locationService.findLocationById(id).isPresent())
            throw new UserNotFoundException("id-"+ id);
        return locationService.findLocationById(id);
    }

    @PostMapping("/locations")
    public Location createLocation(@RequestBody Location location){
        return locationService.saveLocation(location);
    }

    @DeleteMapping("/locations/{id}")
    public void deleteById(@PathVariable("id") int locationId){
        locationService.deleteById(locationId);

    }
}

