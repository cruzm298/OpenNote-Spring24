import React, { useState } from 'react';
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

export default function NotesScreen() {
    const [notes, setNotes] = useState([
      { id: 1, content: 'Note 1: This is a dummy note.' },
      { id: 2, content: 'Note 2: Here\'s another dummy note.' },
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [newNoteContent, setNewNoteContent] = useState('');
  
    const handleAddNote = () => {
      const newNoteId = notes.length + 1;
      const newNote = { id: newNoteId, content: newNoteContent };
      setNotes([...notes, newNote]);
      setModalVisible(false);
      setNewNoteContent('');
    };
  
    const handleDeleteNote = (id) => {
      setNotes(notes.filter(note => note.id !== id));
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>Add a Note</Text>
        </TouchableOpacity>
        <ScrollView style={styles.notesContainer}>
          {notes.map((note) => (
            <View key={note.id} style={styles.note}>
              <Text>{note.content}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteNote(note.id)}>
                <Text style={styles.deleteButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TextInput
                placeholder="Enter your note here"
                style={styles.modalTextInput}
                onChangeText={setNewNoteContent}
                value={newNoteContent}
                multiline={true} // Allow multiple lines
                numberOfLines={4} // Suggests a height that fits 4 lines, adjust as needed
              />
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={handleAddNote}
              >
                <Text style={styles.textStyle}>Add Note</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <StatusBar style="auto" />
      </View>
    );
  }