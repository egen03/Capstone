package com.example.capstoneproject.models;

import javax.persistence.*;

public class Login {
//    2 fields of user - username &password
    private String username;
    private String password;

//    constructor
    public Login(String username, String password) {
        this.username = username;
        this.password = password;
    }

//    getters and setters for username

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

//    getters and setters for password


    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}




