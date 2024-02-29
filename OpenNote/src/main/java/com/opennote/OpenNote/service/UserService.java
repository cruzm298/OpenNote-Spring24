package com.opennote.OpenNote.service;

import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
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

        User user1 = new User(1, "knagesh", "Admin@1234", "knagesh@syr.edu", "admin");
        User user2 = new User(2, "aparida", "Admin@1234", "aparida@syr.edu", "student");

        userList.addAll(Arrays.asList(user1, user2));
    }

    public Optional<User> getUser(Integer userId){
        Optional optional = Optional.empty();

        for(User user: userList){
            if(userId == user.getUserID()){
                optional = Optional.of(user);
                return optional;
            }
        }
        return optional;
    }

    public void setUserListToFirebase(){
        try {
            this.db = FirestoreClient.getFirestore();
            this.colRef = db.collection("Users");
        }catch (Exception e){
            System.out.println(e);
        }
        for(User u: userList){
            Map<String, Object> data = new HashMap<>();
            data.put("username", u.getUsername());
            data.put("password", u.getPassword());
            data.put("email", u.getEmail());
            data.put("role", u.getRole());
            this.colRef.document(Integer.toString(u.getUserID())).set(data);
        }
    }
}
