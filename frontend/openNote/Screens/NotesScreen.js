import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  Alert,
} from 'react-native';
import { styles } from '../styles';
import { getAllNotes, postNewNote } from '../Api';
import { useNavigation } from '@react-navigation/native';
import { PlusIcon } from "react-native-heroicons/solid";




export default function NotesScreen() {
    const navigation = useNavigation();
    const [notes, setNotes] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const getNotes = async ()=>{
      let fetchedNotes = await getAllNotes();
      console.log(fetchedNotes); 
      setNotes(fetchedNotes);
    }
    useEffect(() => {
      getNotes();
    }, [])
  
    const handleAddNote = () => {
      const newNoteId = notes.length + 1;
      const newNote = { 
        noteId: newNoteId,
        categoryId: 1,
        creationDate: Date.now(),
        description: description,
        downVotes: 0,
        upVotes: 1,
        isEdited: false,
        subjectId: 1,
        title: title,
        userId: 1,
        viewCount: 1
      };
      setModalVisible(false);
      console.log(newNote)
      postNewNote(newNote);
      getNotes();
    };
  
    const handleDeleteNote = (id) => {
      setNotes(notes.filter(note => note.id !== id));
    };
  
    return (
      <View style={styles.container}>
        {!notes? <Text>No notes yet!</Text>:<ScrollView style={styles.notesContainer}>
          {notes.map((note) => (
            <View key={note.noteId} style={styles.note}>
              <Text>{note.title}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteNote(note.id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>}


        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View className="flex flex-1 justify-center items-center mt-5">
            <View className="m-5 bg-gray-200 rounded-lg p-10 items-center shadow-md z-10">
            <TextInput
                className="mb-5 align-text-bottom w-56 h-10 border p-5 placeholder-black-200"
                placeholder="Enter your title here"
                onChangeText={setTitle}
                value={title}
                multiline={true} // Allow multiple lines
                numberOfLines={4} // Suggests a height that fits 4 lines, adjust as needed
              />
              <TextInput
                className="mb-5 align-text-bottom w-56 h-20 border p-5 placeholder-black-200"
                placeholder="Enter your note here"
                onChangeText={setDescription}
                value={description}
                multiline={true} // Allow multiple lines
                numberOfLines={4} // Suggests a height that fits 4 lines, adjust as needed
              />
              <TouchableOpacity
                className="bg-[#007bff] p-3 rounded-lg"
                onPress={handleAddNote}
              >
                <Text style={styles.textStyle}>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>*/}
          <View className="flex items-center justify-center">
          <TouchableOpacity className="mt-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#007bff] shadow-lg " onPress={()=> navigation.navigate("New Note")}>
            <PlusIcon color="white" />
          </TouchableOpacity>
          </View>
        <StatusBar style="auto" /> 
      </View>
    );
  }