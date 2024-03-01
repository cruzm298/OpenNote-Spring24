package com.opennote.OpenNote.api.model;

import java.util.Date;

public class Note {

    // attributes for Note class
    private Long noteID;
    private String title;
    private String content;
    private Long authorID;
    private Date creationDate;
    private Date modificationDate;
    private Long categoryID;
    private int viewCount;
    private int downloadCount;
    private int upVote;
    private int downVote;

    // Constructor for Note object
    public Note(Long noteID, String title, String content, Long authorID, Long categoryID, int viewCount, int downloadCount, int upVote, int downVote){
        this.noteID = noteID;
        this.title = title;
        this.content = content;
        this.authorID = authorID;
        //this.creationDate = creationDate;
        //this.modificationDate = modificationDate;
        this.categoryID = categoryID;
        this.viewCount = viewCount;
        this.downloadCount = downloadCount;
        this.upVote = upVote;
        this.downVote = downVote;
    }

    // get and set methods for attributes
    public Long getNoteID(){
        return noteID;
    }

    public void setNoteID(Long noteID){
        this.noteID = noteID;
    }

    public String getTitle(){
        return title;
    }

    public void setTitle(String title){
        this.title = title;
    }

    public String getContent(){
        return content;
    }

    public void setContent(String content){
        this.content = content;
    }

    public Long getAuthorID(){
        return authorID;
    }

    public void setAuthorID(Long authorID){
        this.authorID = authorID;
    }

    public Date getCreationDate(){
        return creationDate;
    }

    public void setCreationDate(Date creationDate){
        this.creationDate = creationDate;
    }

    public Date getModificationDate(){
        return modificationDate;
    }

    public void setModificationDate(Date modificationDate){
        this.modificationDate = modificationDate;
    }

    public Long getCategoryID(){
        return categoryID;
    }

    public void setCategoryID(Long categoryID){
        this.categoryID = categoryID;
    }

    public int getViewCount(){
        return viewCount;
    }

    public void setViewCount(int viewCount){
        this.viewCount = viewCount;
    }

    public int getDownloadCount(){
        return downloadCount;
    }

    public void setDownloadCount(int downloadCount){
        this.downloadCount = downloadCount;
    }

    public int getUpVote(){
        return upVote;
    }

    public void setUpVote(int upVote){
        this.upVote = upVote;
    }

    public int getDownVote(){
        return downVote;
    }

    public void setDownVote(int downVote){
        this.downVote = downVote;
    }

    // additonal methods
    public void createNote(){}

    public void editNote(){}

    public void deleteNote(){}

    public void viewNote(){}

    public void incrementViewCount(){}

    public void incrementDownloadCount(){}
}