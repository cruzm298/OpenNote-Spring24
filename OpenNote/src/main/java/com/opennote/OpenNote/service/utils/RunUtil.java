package com.opennote.OpenNote.service.utils;

import com.opennote.OpenNote.service.FirebaseService;

public class RunUtil {
    public static void main(String[] args) {
        new FirebaseService();
        DBPush dbPush = new DBPush();
        dbPush.pushToDB();

    }
}
