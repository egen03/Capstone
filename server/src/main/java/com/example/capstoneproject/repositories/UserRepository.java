package com.example.capstoneproject.repositories;

import com.example.capstoneproject.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository <User, Long>{
//    make user functionalty
    @Query("From User u WHERE u.username = ?1 and u.password = ?2")
    public User login(String username, String password);
}
