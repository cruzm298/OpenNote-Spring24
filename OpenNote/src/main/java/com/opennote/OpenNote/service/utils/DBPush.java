package com.opennote.OpenNote.service.utils;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import java.io.File;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

//this test file pushes all the test data into the Firebase DB
public class DBPush {
        //list of all tables we will have in the DB
        //currently missing the FileTypes
        private final String[] tables = {"Users", "Subjects"};

        //initialize firestore db
        private Firestore db;
        CollectionReference colRef; //collection reference

        //create a new Object mapper for the Jackson library
        private ObjectMapper objectMapper = new ObjectMapper();

        public void pushToDB(){
            //Iterate over each string in the tables array
            for(String t: this.tables){
                try {
                    //to get class names, convert plural string to singular
                    char[] tca = t.toCharArray();
                    StringBuilder tb = new StringBuilder();
                    for(int i = 0; i < tca.length-1; i++){
                        tb.append(tca[i]);
                    }
                    String c = tb.toString();

                    //open corresponding json file with data in the resources folder
                    File file = new File("src/main/java/com/opennote/OpenNote/service/assets/" + t + ".json");

                    //Use the java.lang.reflect library to get class names, type information, and the fields
                    String className = "com.opennote.OpenNote.api.model." + c;
                    String arrayClassName = "[L" + className + ";";
                    Class<?> classType = Class.forName(className);
                    Field[] fs = classType.getDeclaredFields();
                    Class<?> arrayType = Class.forName(arrayClassName); //for the array type of the same class

                    //convert arraytype to a javatype so it can be used with jackson's object mapper
                    JavaType javaType = this.objectMapper.getTypeFactory().constructArrayType(arrayType.getComponentType());
                    Object[] objs = this.objectMapper.readValue(file, javaType);
                    Map<String, Object> o = new HashMap<>();

                    //iterate over each class instance in the json array and push to db
                    for(Object x: objs){
                        for(Field f: fs){
                            StringBuilder sb = new StringBuilder();
                            char[] fca = f.getName().toCharArray();
                            fca[0] = Character.toUpperCase(fca[0]);
                            sb.append(fca);
                            Method method = classType.getMethod("get"+sb);
                            o.put(f.getName(), method.invoke(x));
                            try {
                                this.db = FirestoreClient.getFirestore();
                                this.colRef = db.collection(t); //create a new table with name == t
                                ApiFuture<DocumentReference> addedDocRef = this.colRef.add(o);
                            }catch (Exception e){
                                System.out.println(e);
                            }
                        }
                    }
                }catch (Exception e){
                    System.out.println(e);
                }
            }
            System.out.println("DB PUSH SUCCESS!");
        }

}
