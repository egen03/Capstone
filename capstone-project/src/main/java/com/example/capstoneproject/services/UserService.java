package com.example.capstoneproject.services;

import com.example.capstoneproject.models.Login;

import java.util.List;

// this interface will have 2 methods return a user and a list of users
public interface UserService {
    public Login getUser();
    public List<Login> getUsers();
}
