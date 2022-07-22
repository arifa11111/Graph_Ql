package com.greencommute.jobservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "job")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Job {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int jobId;

    @Column(name = "job_title")
    private String jobName;


    @Column(name = "company_name")
    private String companyName;

    @Column(name = "jobs_posted_date")
    private String jobsPostedDate;

    @Column(name = "last_date")
    private Date lastDate;

    @Column(name = "id_skills")
    private int skillsId;

}
