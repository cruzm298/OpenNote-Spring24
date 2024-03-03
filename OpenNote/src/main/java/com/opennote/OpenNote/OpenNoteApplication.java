package com.opennote.OpenNote;

import com.google.firebase.FirebaseApp;
import com.opennote.OpenNote.service.FirebaseService;
import com.opennote.OpenNote.service.utils.DBPush;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class OpenNoteApplication {

	public static void main(String[] args) {
		SpringApplication.run(OpenNoteApplication.class, args);
		new FirebaseService();
	}

}
