package com.opennote.OpenNote.service;

// The CommentService manages the list of comments in memory but can be extended to interact with a database or any other data source.

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    private List<Comment> comments = new ArrayList<>();
    private int nextCommentId = 1;

    public Comment postComment(Comment comment) {
        comment.setCommentID(nextCommentId++);
        comments.add(comment);
        // You may want to perform additional operations here, like saving to a database
        return comment;
    }

    public Comment editComment(int commentID, Comment updatedComment) {
        for (Comment comment : comments) {
            if (comment.getCommentID() == commentID) {
                comment.setContent(updatedComment.getContent());
                // You may want to perform additional operations here, like updating in a database
                return comment;
            }
        }
        return null; // Comment not found
    }

    public void deleteComment(int commentID) {
        comments.removeIf(comment -> comment.getCommentID() == commentID);
        // You may want to perform additional operations here, like deleting from a database
    }
}
