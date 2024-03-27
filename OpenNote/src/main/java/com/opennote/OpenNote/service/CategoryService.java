package com.opennote.OpenNote.service;

import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.Firestore;
import com.google.firebase.cloud.FirestoreClient;
import com.opennote.OpenNote.api.model.Category;
import com.opennote.OpenNote.api.model.User;
import org.springframework.stereotype.Service;

import java.lang.reflect.Array;
import java.util.*;

@Service
public class CategoryService {

    private List<Category> categoryList;
    private Firestore db;
    private CollectionReference colRef;

    public CategoryService(){
        categoryList = new ArrayList<>();

        Category category1 = new Category(1, "Notes", "Notes taken during class, lecture, or while studying");
        Category category2 = new Category(2, "Quiz", "A assessment given in a class");
        Category category3 = new Category(3, "Exam", "Exam for a course");
        Category category4 = new Category(4, "Problem Set", "A problem set given as an assignment in class");
        Category category5 = new Category(5, "Worksheet", "Worksheet assigned in a class");

        categoryList.addAll(Arrays.asList(category1, category2, category3, category4, category5));
    }

    public Optional<Category> getCategory(Integer categoryId){
        Optional optional = Optional.empty();

        for(Category c: categoryList){
            if(categoryId == c.getCategoryID()){
                optional = Optional.of(c);
                return optional;
            }
        }
        return optional;
    }

    public Category addCategory(Integer categoryId, String categoryName, String description){
        Category category = new Category(categoryId, categoryName, description);
        return category;
    }

    public void initializeCategories(){
        try {
            this.db = FirestoreClient.getFirestore();
            this.colRef = db.collection("Categories");
        }catch (Exception e){
            System.out.println(e);
        }
        for(Category c: categoryList){
            Map<String, Object> data = new HashMap<>();
            data.put("categoryName", c.getCategoryName());
            data.put("description", c.getDescription());
            this.colRef.document(Integer.toString(c.getCategoryID())).set(data);
        }
    }
}
