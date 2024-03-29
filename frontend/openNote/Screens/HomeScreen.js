import React, { useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../styles';

export default function HomeScreen() {
    const handleShareNote = () => {
      alert('Navigate to the share notes page');
    };
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-gray-400 text-md font-bold mt-2">
            Open up App.js to start working on your app!
        </Text>
        <Text style={styles.title}>Welcome to OpenNote!</Text>
        <Text style={styles.instructions}>Click the button below to share your notes with others.</Text>
        <TouchableOpacity style={styles.button} onPress={handleShareNote}>
          <Text style={styles.buttonText}>Share a Note</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }