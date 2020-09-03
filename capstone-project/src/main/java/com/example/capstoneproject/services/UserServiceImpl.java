package com.example.capstoneproject.services;

import com.example.capstoneproject.models.Login;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class UserServiceImpl implements UserService{
    @Override
    public Login getUser() {
//        controller info:
        Login user = new Login("jewel", "password5");
        return user;
    }

    @Override
    public List<Login> getUsers() {
        List<Login> users = new ArrayList<Login>();
        users.add(new Login("Ayana", "password2"));
        users.add(new Login("Jeffrey", "password3"));
        users.add(new Login("Lexy", "password4"));
        return users;
    }
}
