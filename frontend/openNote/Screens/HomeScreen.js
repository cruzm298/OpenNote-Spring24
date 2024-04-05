import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView
} from 'react-native';
import * as Icon from "react-native-feather";
//import Note from "../screenComponents/Note.js";
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
      // Miguel code
      <SafeAreaView className="flex-1">
        <StatusBar barStyle="dark-content" />
        <View className="items-center">
            <Text className="text-2xl font-bold"> Welcome to OpenNote!</Text>
            <Text className="text-gray-400 text-md font-bold mt-2">
              {!user ? 'User not logged in!' : `Currently logged in user: ${user.username}`}
            </Text>
            <StatusBar className="bg-red-200 text-4xl" />
        </View>

        {/* Search Bar*/}
        <View className="flex-row space-x-2 px-4 pb-2">
          <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-3 mt-5" width="10">
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder='Search' className="ml-2 flex-1"></TextInput>
          </View>
        </View>

        {/*User feed */}
      </SafeAreaView>

     /* <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-2xl font-bold">Welcome to OpenNote!</Text>
        <Text className="text-gray-400 text-md font-bold mt-2">
            {!user ? 'User not logged in!' : `Currently logged in user: ${user.username}`}
        </Text>
        <StatusBar className="bg-red-200 text-4xl" />
      </View>*/
    );
  }