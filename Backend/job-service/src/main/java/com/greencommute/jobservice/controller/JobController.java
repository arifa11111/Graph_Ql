package com.greencommute.jobservice.controller;

import com.greencommute.jobservice.entity.*;
import com.greencommute.jobservice.exception.UserNotFoundException;
import com.greencommute.jobservice.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class JobController {

    @Autowired
    private JobsService jobService;

    @GetMapping("/jobs")
    public List<Job> getAllJobs() {
        return jobService.findAll();
    }
    @GetMapping("/jobs/{id}")
    public Job findJobById(@PathVariable("id") int jobId) {
        if(jobService.findJobById(jobId)==null)
            throw new UserNotFoundException("id-"+ jobId);
        return jobService.findJobById(jobId);
    }

    @PostMapping("/jobs")
    public Job createJob(@RequestBody Job job){
        return jobService.saveJob(job);
    }

    @DeleteMapping("/jobs/{id}")
    public void deleteJob(@PathVariable("id") int jobId){
         jobService.deleteById(jobId);

    }

}


