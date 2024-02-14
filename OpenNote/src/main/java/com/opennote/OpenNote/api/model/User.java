package com.opennote.OpenNote.api.model;

import java.util.Date;

public class User {
    private int userID;
    private String username;
    private String password;
    private String email;
    private Date registrationDate;
    private Date lastLogin;
    private String role;

    //constructor
    public User(int userID, String username, String password, String email, String role){
        this.userID = userID;
        this.username = username;
        this.password = password;
        this.email = email;
//        this.registrationDate = registrationDate;
//        this.lastLogin = lastLogin;
        this.role = role;
    }

    //defining getter and setter methods
    public int getUserID(){
        return userID;
    }

    public void setUserID(int userID){
    this.userID = userID;
    }

    public String getUsername(){
        return username;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public String getPassword(){
        return password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getEmail(){
        return email;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public Date getRegistrationDate(){
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate){
        this.registrationDate = registrationDate;
    }

    public Date getLastLogin(){
        return lastLogin;
    }

    public void setLastLogin(Date lastLogin){
        this.lastLogin = lastLogin;
    }

    public String getRole(){
        return role;
    }

    public void setRole(String role){
        this.role = role;
    }
}