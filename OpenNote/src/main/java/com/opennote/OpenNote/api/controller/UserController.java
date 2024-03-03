package com.opennote.OpenNote.api.controller;

import com.opennote.OpenNote.api.model.User;
import com.opennote.OpenNote.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }
    @GetMapping("/user")
    public User getUser(@RequestParam Integer userId){
        Optional user = this.userService.getUser(userId);
        if(user.isPresent()) return (User) user.get();
        return null;
    }

    @GetMapping("/userset")
    public void setUser(){
        this.userService.setUserList();
    }

}
