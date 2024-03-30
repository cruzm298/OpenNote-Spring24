package com.opennote.OpenNote.service;

import com.opennote.OpenNote.api.model.FileManager;
import com.opennote.OpenNote.api.model.FileManager;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class FileManagerService {

    // create list of file manager objects
    private List<FileManager> fileManagerList;
    // add made up files to list
    public FileManagerService(){
        fileManagerList = new ArrayList<>();

        FileManager file1 = new FileManager(192919L,  128382L, "File 1",  "pdf",  388L);
        FileManager file2 = new FileManager(218828L,  378727L,  "File 2",  "pdf",  347L);

        fileManagerList.addAll(Arrays.asList(file1, file2));
    }

    public Optional<FileManager> getFile(Long fileID){
        Optional optional = Optional.empty();
        for (FileManager file : fileManagerList){
            if(fileID == file.getFileID()) {
                optional = Optional.of(file);
                return optional;
            }
        }
        return optional;
    }
}
