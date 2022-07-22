package com.greencommute.jobservice.controller;

import com.greencommute.jobservice.entity.*;
import com.greencommute.jobservice.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    private JobsService jobsService;


    @GetMapping("/jobs")
    public List<Job> allJobs() {
        return jobsService.findAll();
    }

}


