package com.opennote.OpenNote.api.model;

import java.util.Date;

public class Comment {
    private int commentID;
    private int noteID;
    private int authorID;
    private String content;
    private Date creationDate;

    // Constructor
    public Comment(int commentID, int noteID, int authorID, String content) {
        this.commentID = commentID;
        this.noteID = noteID;
        this.authorID = authorID;
        this.content = content;
        this.creationDate = new Date(); // Set creation date to current date/time
    }

    // Method to post a comment
    public void postComment() {
        // Implementation to post comment to the database or storage
        System.out.println("Comment with ID " + commentID + " posted successfully!");
    }

    // Method to edit a comment
    public void editComment(String newContent) {
        // Implementation to edit comment in the database or storage
        this.content = newContent;
        System.out.println("Comment with ID " + commentID + " edited successfully!");
    }

    // Method to delete a comment
    public void deleteComment() {
        // Implementation to delete comment from the database or storage
        System.out.println("Comment with ID " + commentID + " deleted successfully!");
    }

    // Getters and Setters
    public int getCommentID() {
        return commentID;
    }

    public void setCommentID(int commentID) {
        this.commentID = commentID;
    }

    public int getNoteID() {
        return noteID;
    }

    public void setNoteID(int noteID) {
        this.noteID = noteID;
    }

    public int getAuthorID() {
        return authorID;
    }

    public void setAuthorID(int authorID) {
        this.authorID = authorID;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
    }

    // Main method for testing
    public static void main(String[] args) {
        // Creating a new comment
        Comment comment = new Comment(1, 1, 1, "This is a sample comment.");

        // Posting the comment
        comment.postComment();

        // Editing the comment
        comment.editComment("This is the edited comment.");

        // Deleting the comment
        comment.deleteComment();
    }
}