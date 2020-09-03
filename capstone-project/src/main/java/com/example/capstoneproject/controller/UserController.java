package com.example.capstoneproject.controller;

import com.example.capstoneproject.models.Login;

import com.example.capstoneproject.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

@RestController
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
}
