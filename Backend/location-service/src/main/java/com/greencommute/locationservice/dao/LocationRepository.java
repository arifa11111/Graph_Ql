package com.greencommute.locationservice.dao;

import com.greencommute.locationservice.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location,Integer> {
}
