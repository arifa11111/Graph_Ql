package com.greencommute.userservice.service;

import com.greencommute.userservice.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface UserService {
    List<User> getAllById();

}
