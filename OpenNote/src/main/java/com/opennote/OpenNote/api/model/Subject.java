package com.opennote.OpenNote.api.model;

import java.util.Date;

public class Subject {
    private int subjectId;
    private String subjectName;
    private String subjectDescription;

    //constructor
    public Subject(int subjectId, String subjectName, String subjectDescription){
        this.subjectId = subjectId;
        this.subjectName = subjectName;
        this.subjectDescription = subjectDescription;
    }
    public Subject(){}

    public int getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(int subjectId) {
        this.subjectId = subjectId;
    }

    public String getSubjectName() {
        return subjectName;
    }

    public void setSubjectName(String subjectName) {
        this.subjectName = subjectName;
    }

    public String getSubjectDescription() {
        return subjectDescription;
    }

    public void setSubjectDescription(String subjectDescription) {
        this.subjectDescription = subjectDescription;
    }
//defining getter and setter methods

}