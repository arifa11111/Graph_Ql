package com.greencommute.userservice.dao;

import com.greencommute.userservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Integer> {

    User findUserById(int userId);

    List<User> getAllById();
}
