package com.example.capstoneproject.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// Rest Controller created
@RestController
@RequestMapping ("/fashion")
public class shirts {
//    Get request for api
    @GetMapping
    public String listOfItems() {
        return "Shirts, Pants, & Dresses";
    }
    @GetMapping ("/shirts")
    public String shirts() {
        return "Shirts";
    }
    @GetMapping ("/bottoms")
    public String pants() {
        return "Pants";
    }
    @GetMapping ("/dress")
    public String dress() {
        return "Dresses";
    }

}
