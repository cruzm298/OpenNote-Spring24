package com.opennote.OpenNote.api.controller;
// The CommentController exposes REST endpoints for posting, editing, and deleting comments,
// and it delegates the actual operations to the CommentService.


import com.opennote.OpenNote.api.model.Comment;
import com.opennote.OpenNote.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/comments")
public class CommentController {

    @Autowired
    private CommentService commentService;

    @PostMapping
    public Comment postComment(@RequestBody Comment comment) {
        return commentService.postComment(comment);
    }

    @PutMapping("/{id}")
    public Comment editComment(@PathVariable("id") int commentID, @RequestBody Comment comment) {
        return commentService.editComment(commentID, comment);
    }

    @DeleteMapping("/{id}")
    public void deleteComment(@PathVariable("id") int commentID) {
        commentService.deleteComment(commentID);
    }
}
