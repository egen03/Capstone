package com.example.capstoneproject.services;

import com.example.capstoneproject.models.User;

import java.util.List;

public class UserServiceImpl implements UserService{
    @Override
    public User getUser() {
        User user = new User("jewel", "password5");
        return user;
    }

    @Override
    public List<User> getUsers() {
        return null;
    }
}
