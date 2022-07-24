package com.greencommute.userservice.controller;

import com.greencommute.userservice.entity.User;
import com.greencommute.userservice.exception.UserNotFoundException;
import com.greencommute.userservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/users")
    public List<User> allUsers(){
        return  userService.getAllById();

    }
//    @GetMapping("users/{id}")
//    public User findUserById(@PathVariable("id") int userId) {
//        if(userService.findUserById(userId)==null)
//            throw new UserNotFoundException("id-"+ userId);
//        return userService.findUserById(userId);
//    }
}


