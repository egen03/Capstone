package com.example.capstoneproject.controller;

import com.example.capstoneproject.models.User;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/user")

public class UserController {
//    method goes here

//    endpoint "/user"
//    takes GET request
//    returns User object
    public String userOne() {
        User userOne = new User("erica", "password")
        return "username";
    }
}
