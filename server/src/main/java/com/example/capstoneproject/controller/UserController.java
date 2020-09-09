package com.example.capstoneproject.controller;

import com.example.capstoneproject.models.Login;

import com.example.capstoneproject.models.User;
import com.example.capstoneproject.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@CrossOrigin
@RequestMapping ("/user")

public class UserController {
    @Autowired
    UserService userService;

    @GetMapping
    public Login userOne() {
        return userService.getUser();
    }

//    create endpoint for list of all users
    @GetMapping("/listall")
//    java function List<> used to list all users
    public List<Login> listAll() {
        return userService.getUsers();
    }

//    ////////// POSTGRES /////////////

    @GetMapping ("/users")
    public Iterable<User> findALL() {
        return userService.listUsers();
    }

//    publish data to postgres
   @PostMapping
    public User createUser(@RequestBody User userParam) {
        return userService.createUser(userParam);
   }

//   login functionality
   @GetMapping ("/login/{username}/{password}")
    public User login(@PathVariable String username, String password){
        return userService.login(username, password);
   }

}
