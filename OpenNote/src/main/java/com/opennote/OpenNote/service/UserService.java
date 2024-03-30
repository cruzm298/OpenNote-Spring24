package com.opennote.OpenNote.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.opennote.OpenNote.api.model.Role;
import com.opennote.OpenNote.api.model.User;
import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class UserService {
    private List<User> userList;
    private Firestore db;
    private CollectionReference colRef;

    public UserService() {
        userList = new ArrayList<>();

        User user1 = new User(1, "knagesh", "Admin@1234", "knagesh@syr.edu", 1, "Krutartha Nagesh");
        User user2 = new User(2, "aparida", "Admin@1234", "aparida@syr.edu", 2, "Adya Parida");

        userList.addAll(Arrays.asList(user1, user2));
    }

    public Optional<User> getUser(Integer userId){
        Optional optional = Optional.empty();
        User user = new User();
        try {
            this.db = FirestoreClient.getFirestore();
            this.colRef = db.collection("Users");
            DocumentReference docRef = colRef.document(userId.toString());
            ApiFuture<DocumentSnapshot> future = docRef.get();
            DocumentSnapshot document = future.get();
            if(document.exists()){
                user = document.toObject(User.class);
                user.setUserId(userId);
                return Optional.of(user);
            }
            else{
                System.out.println("User with given userID does not exist");
            }
        }catch (Exception e){
            System.out.println(e);
        }

        return optional;
    }

    public Optional<User> updateUser(Integer userId, String username, String password, String email, Role role){
        Optional optional = Optional.empty();
        User user = new User();
        try {
            this.db = FirestoreClient.getFirestore();
            this.colRef = db.collection("Users");
            DocumentReference docRef = colRef.document(userId.toString());
            ApiFuture<DocumentSnapshot> future = docRef.get();
            DocumentSnapshot document = future.get();
            if(document.exists()){
                user = document.toObject(User.class);
                user.setUserId(userId);
                return Optional.of(user);
            }
            else{
                System.out.println("User with given userID does not exist");
            }
        }catch (Exception e){
            System.out.println(e);
        }
        return optional;
    }

    public void setUserList(){
        try{
            this.db = FirestoreClient.getFirestore();
            this.colRef = db.collection("Users");
            for(User u: this.userList){
                Map<String, Object> user = new HashMap<>();
                user.put("userId", u.getUserId());
                user.put("username", u.getUsername());
                user.put("email", u.getEmail());
                user.put("password", u.getPassword());
                user.put("role", u.getRoleId());
                ApiFuture<WriteResult> future = colRef.document().set(user);
            }
        }catch (Exception e){
            System.out.println(e);
        }

    }

    public User addUser(Integer userId, String username, String email, String password, Integer roleId, String name){
        User user = new User(userId, username, email, password, roleId, name);
        //add db logic later
        return user;
    }
}
