package com.opennote.OpenNote.api.model;

public class SearchEngine {
    private String keywords;

    public SearchEngine(String keywords) {
        this.keywords = keywords;
    }

    public String getKeywords() {
        return keywords;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }
}
