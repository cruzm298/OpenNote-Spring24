package com.opennote.OpenNote.api.model;
import java.io.*;

public class FileManager {
    // attributes for file manager
    private Long fileID;
    private Long noteID;
    private String fileName;
    private String fileType;
    private Long fileSize;

    // constructor
    public FileManager(Long fileID, Long noteID, String fileName, String fileType, Long fileSize){
        this.fileID = fileID;
        this.noteID = noteID;
        this.fileName = fileName;
        this.fileType = fileType;
        this.fileSize = fileSize;
    }

    // set and get methods
    public Long getFileID(){
        return fileID;
    }

    public void setFileID(Long fileID){
        this.fileID = fileID;
    }

    public Long getNoteID(){
        return noteID;
    }

    public void setNoteID(Long noteID){
        this.noteID = noteID;
    }

    public String getFileName(){
        return fileName;
    }

    public void setFileName(String fileName){
        this.fileName = fileName;
    }

    public String getFileType(){
        return  fileType;
    }

    public void setFileType(String fileType){
        this.fileType = fileType;
    }

    public Long getFileSize(){
        return fileSize;
    }

    public void setFileSize(Long fileSize){
        this.fileSize = fileSize;
    }

    // methods

    // delete file method
    public void deleteFile(){
        /*File deleteFile = new File(fileName);
        if (deleteFile.exists()) {
            if (deleteFile.delete()) {
                System.out.println(" Deleted the file successfully.");
            } else {
                System.out.println("Failed to delete the file.");
            }
        }
        else{
                System.out.println("File does not exist. Please create one.");
            }*/
    }

    public void donwloadFile(){}

    public void uploadFile(){}
}