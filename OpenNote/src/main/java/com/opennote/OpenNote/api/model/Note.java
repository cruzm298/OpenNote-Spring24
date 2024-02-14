package com.opennote.OpenNote.api.model;

import java.util.Date;

public class Note {
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


}