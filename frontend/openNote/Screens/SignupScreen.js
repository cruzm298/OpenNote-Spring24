import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { styles } from '../styles';

export default function SignupScreen() {
    return (
      <View className="flex flex-1 p-10 justify-center items-center">
        <TouchableOpacity className=" bg-[#d1cfcf] items-center justify-center rounded  w-20 h-10">
          <View className="flex flex-row justify-evenly w-full">
            <Text>hi</Text>
            <Text>hi</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }