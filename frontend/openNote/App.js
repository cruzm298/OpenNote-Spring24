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
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  const handleShareNote = () => {
    alert('Navigate to the share notes page');
  };

  return (
    <View style={[styles.container, styles.centeredContent]}>
      <Text style={styles.title}>Welcome to OpenNote!</Text>
      <Text style={styles.instructions}>Click the button below to share your notes with others.</Text>
      <TouchableOpacity style={styles.button} onPress={handleShareNote}>
        <Text style={styles.buttonText}>Share a Note</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

function NotesScreen() {
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

function SettingsScreen() {
  return (
    <View style={[styles.container, styles.centeredContent]}>
      <Text>Settings Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={[styles.container, styles.centeredContent]}>
      <Text>Profile Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notes" component={NotesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'center', // Align button in the center of its container
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  notesContainer: {
    flex: 1,
    width: '100%',
  },
  note: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff6347',
    padding: 5,
    borderRadius: 5,
    alignSelf: 'flex-end', // Position the delete button to the right
  },
  deleteButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalTextInput: {
    marginBottom: 15,
    textAlign: "left", // Adjusted for multiline input
    textAlignVertical: "top", // Ensures text starts from the top
    width: 250, // Increased width
    height: 100, // Increased height to accommodate multiple lines
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10, // Add padding inside the text input for better text alignment
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
