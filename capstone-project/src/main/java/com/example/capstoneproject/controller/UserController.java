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

//    create endpoint for list of all users
    @GetMapping("/listall")
//    java function List<> used to list all users
    public List<User>listAll() {
//     list of users
        List<User> users = new ArrayList<User>();
//     create user objects
        users.add(new User("Ayana", "password2"));
        users.add(new User("Jeffrey", "password3"));
        users.add(new User("Lexy", "password4"));
        return users;
    }
}
