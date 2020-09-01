package com.example.capstoneproject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// Rest Controller endpoints for api
@RestController("/userprofile")
public class userProfile {
//    Get request for api
    @GetMapping
    public String listOfTops() {
        return "Shirts";
    }
}
