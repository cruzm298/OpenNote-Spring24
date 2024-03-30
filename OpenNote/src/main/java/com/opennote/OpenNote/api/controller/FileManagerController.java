package com.opennote.OpenNote.api.controller;

import com.opennote.OpenNote.api.model.FileManager;
import com.opennote.OpenNote.api.model.Note;
import com.opennote.OpenNote.service.FileManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.File;
import java.util.Optional;

public class FileManagerController {

    private FileManagerService fileManagerService;

    @Autowired
    public FileManagerController(FileManagerService fileManagerService) {this.fileManagerService = fileManagerService;}

    @RequestMapping("/")
    //@GetMapping // makes get calls to this api setup
    // get note method
    public @ResponseBody FileManager getFile(@RequestParam Long fileId){
        Optional file = fileManagerService.getFile(fileId);
        if(file.isPresent()){
            return (FileManager) file.get();
        }
        return null;
    }

}
