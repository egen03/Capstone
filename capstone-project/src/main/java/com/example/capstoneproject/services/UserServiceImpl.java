package com.example.capstoneproject.services;

import com.example.capstoneproject.models.User;

import java.util.ArrayList;
import java.util.List;

public class UserServiceImpl implements UserService{
    @Override
    public User getUser() {
//        controller info:
        User user = new User("jewel", "password5");
        return user;
    }

    @Override
    public List<User> getUsers() {
        List<User> users = new ArrayList<User>();
        users.add(new User("Ayana", "password2"));
        users.add(new User("Jeffrey", "password3"));
        users.add(new User("Lexy", "password4"));
        return users;
    }
}
