package com.opennote.OpenNote.service;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class FirebaseService {
    private FirebaseApp app;
    private Firestore dbInstance;
    public FirebaseService(){
        FileInputStream serviceAccount;
        {
            try {
                serviceAccount = new FileInputStream("src/main/java/com/opennote/OpenNote/service/private_key.json");
            } catch (FileNotFoundException e) {
                throw new RuntimeException(e);
            }
        }

        FirebaseOptions options;

        {
            try {
                options = new FirebaseOptions.Builder()
                        .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                        .setDatabaseUrl("https://onenote-35aab-default-rtdb.firebaseio.com")
                        .build();
                FirebaseApp myApp = FirebaseApp.initializeApp(options);
                System.out.println("Connection to Firebase successful!");
                this.app = myApp;
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }


    }
    public FirebaseApp getFirebaseApp(){
        return this.app;
    }
}
