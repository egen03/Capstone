package com.example.capstoneproject.controller;

import com.example.capstoneproject.models.User;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
@RequestMapping ("/user")

public class UserController {
//    method goes here

//    endpoint "/user"
//    takes GET request
//    returns User object
    @GetMapping
    public User userOne() {
//        User userOne = new User("erica", "password");
        return new User("erica", "password");
    }
}
