import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const handleShareNote = () => {
 
    alert('Navigate to the share notes page');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to OpenNote!</Text>
      <Text style={styles.instructions}>Click the button below to share your notes with others.</Text>
      <TouchableOpacity style={styles.button} onPress={handleShareNote}>
        <Text style={styles.buttonText}>Share a Note</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});
