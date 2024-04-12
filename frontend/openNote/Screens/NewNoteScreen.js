import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


export default function NewNoteScreen() {
    return (
      <View className="flex flex-1 p-10 text-black">
        <TextInput placeholder='Title' className="border h-20 rounded-lg p-5 items-center justify-center"></TextInput>
        <TextInput placeholder='Description' className="mt-10 border h-60 rounded-lg p-5 items-center justify-center"></TextInput>
        <View className="flex flex-1 items-center justify-center">
            <TouchableOpacity className="flex mt-10 bg-[#007bff] p-5 rounded-lg w-40 items-center justify-center" onPress={()=> navigation.navigate("New Note")}>
            <Text className="text-white">Add Note</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }