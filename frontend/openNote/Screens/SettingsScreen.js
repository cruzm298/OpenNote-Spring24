import React, { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { styles } from '../styles';

export default function SettingsScreen() {
    return (
      <View style={[styles.container, styles.centeredContent]}>
        <Text>Settings Screen</Text>
      </View>
    );
  }