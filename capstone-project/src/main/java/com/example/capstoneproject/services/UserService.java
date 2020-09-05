package com.example.capstoneproject.services;

import com.example.capstoneproject.models.Login;
import com.example.capstoneproject.models.User;

import java.util.List;

// this interface will have 2 methods return a user and a list of users
public interface UserService {
    public Login getUser();
    public List<Login> getUsers();

//    ////// POSTGRES SQL /////////

//    create user using IOC, return an array of users, and login

    public Iterable<User> listUsers();
    public User createUser(User user);
    public User login(String username, String password);

}
