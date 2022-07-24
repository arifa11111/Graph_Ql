package com.greencommute.jobservice.service;

import com.greencommute.jobservice.dao.JobsRepository;
import com.greencommute.jobservice.entity.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsServiceImpl implements JobsService{

    @Autowired
    private JobsRepository jobsRepository;

    @Override
    public List<Job> findAll() {
        return jobsRepository.findAll();
    }

    public Job findJobById(int jobId) {
        return jobsRepository.findByjobId(jobId);
    }

    @Override
    public Job saveJob(Job job) {
        return jobsRepository.save(job);
    }

    @Override
    public void deleteById(int jobId) {
         jobsRepository.deleteById(jobId);
    }


}
