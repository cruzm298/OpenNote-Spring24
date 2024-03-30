package com.opennote.OpenNote.api.model;

import java.util.Date;

public class User {
    private int userId;
    private String username;
    private String password;
    private String email;
//    private Date registrationDate;
//    private Date lastLogin;
    private Integer roleId;

    private String name;

    //constructor
    public User(int userId, String username, String password, String email, Integer roleId, String name){
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.email = email;
//        this.registrationDate = registrationDate;
//        this.lastLogin = lastLogin;
        this.roleId = roleId;
        this.name = name;
    }
    public User(){}

    //defining getter and setter methods
    public int getUserId(){
        return userId;
    }

    public void setUserId(int userId){
    this.userId = userId;
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

//    public Date getRegistrationDate(){
//        return registrationDate;
//    }
//
//    public void setRegistrationDate(Date registrationDate){
//        this.registrationDate = registrationDate;
//    }
//
//    public Date getLastLogin(){
//        return lastLogin;
//    }
//
//    public void setLastLogin(Date lastLogin){
//        this.lastLogin = lastLogin;
//    }

    public Integer getRoleId(){
        return roleId;
    }

    public void setRoleId(Integer roleId){
        this.roleId = roleId;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name = name;
    }
}