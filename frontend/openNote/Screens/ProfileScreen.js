import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { styles } from '../styles';

export default function ProfileScreen() {
  return (
    <View style={[styles.container, styles.centeredContent]}>
      <View style={styles.profileCard}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://www.clipartkey.com/mpngs/m/152-1520367_user-profile-default-image-png-clipart-png-download.png" }}
        />
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john.doe@example.com</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Username</Text>
          <Text style={styles.infoText}>johndoe123</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Email</Text>
          <Text style={styles.infoText}>john.doe@example.com</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Role</Text>
          <Text style={styles.infoText}>Admin</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View> );
}