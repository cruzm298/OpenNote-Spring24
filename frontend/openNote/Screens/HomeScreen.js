import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { getUserFromApi, test } from '../Api';


export default function HomeScreen() {
  const [user, setUser] = useState(null);
  const getUser = async (userId) => {
    let myUser = await getUserFromApi(userId);
    console.log(myUser);
    setUser(myUser);
  }
  useEffect(()=>{
    getUser(1);
  }, []);
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-2xl font-bold">Welcome to OpenNote!</Text>
        <Text className="text-gray-400 text-md font-bold mt-2">
            {!user ? 'User not logged in!' : `Currently logged in user: ${user.username}`}
        </Text>
        <StatusBar className="bg-red-200 text-4xl" />
      </View>
    );
  }