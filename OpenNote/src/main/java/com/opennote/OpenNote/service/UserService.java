package com.opennote.OpenNote.service;

import com.opennote.OpenNote.api.model.User;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UserService {

    private List<User> userList;

    public UserService() {
        userList = new ArrayList<>();

        User user1 = new User(1, "knagesh", "Admin@1234", "knagesh@syr.edu", "admin");
        User user2 = new User(2, "aparida", "Admin@1234", "aparida@syr.edu", "admin");

        userList.addAll(Arrays.asList(user1, user2));
    }

    public Optional<User> getUser(Integer userId) {
        Optional optional = Optional.empty();
//        add FB logic here
        for(User user: userList){
            if(userId == user.getUserID()){
                optional = Optional.of(user);
                return optional;
            }
        }
        return optional;
    }

}
