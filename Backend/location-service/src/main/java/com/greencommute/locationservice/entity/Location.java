package com.greencommute.locationservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "location")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Location {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int areaId;
    @Column(name = "city")
    private String cityId;
    @Column(name = "area")
    private String area;
    @Column(name = "zip_code")
    private String zipCode;
    @Column(name = "state_name")
    private String stateName;

}
