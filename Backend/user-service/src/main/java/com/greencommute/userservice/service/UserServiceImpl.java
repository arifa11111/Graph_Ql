package com.greencommute.userservice.service;

import com.greencommute.userservice.dao.UserRepository;
import com.greencommute.userservice.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public List<User> getAllById() {
        return userRepository.getAllById();
    }
}
