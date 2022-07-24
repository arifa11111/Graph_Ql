package com.greencommute.jobservice.service;

import com.greencommute.jobservice.entity.Job;

import java.util.List;

public interface JobsService {


    List<Job> findAll();

    Job findJobById(int id);


    Job saveJob(Job job);


    void deleteById(int jobId);
}
