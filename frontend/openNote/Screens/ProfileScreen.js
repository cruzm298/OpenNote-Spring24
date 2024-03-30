import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { getUserFromApi } from '../Api';


export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const getUser = async (userId) => {
    let myUser = await getUserFromApi(userId);
    console.log(myUser);
    setUser(myUser);
  }
  useEffect(()=>{
    getUser(1);
  }, []);
  return (!user? <Text>Waiting</Text>:
    <View className="flex-1 items-center justify-center p-20 bg-[#f0f4f7]">
      <Image
        source={{ uri: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png'}}
        className="w-48 h-48 rounded-full mb-5"
      />
      <Text className="text-2xl font-bold mb-2">{user.username}</Text>
      <View className="w-full items-center justify-center">
        <View className="flex-row mb-3">
          <Text className="font-bold mr-1">Username:</Text>
          <Text className="text-sm">{user.username}</Text>
        </View>
        <View className="flex-row mb-3">
          <Text className="font-bold mr-1">Email:</Text>
          <Text className="text-sm">{user.email}</Text>
        </View>
        <View className="flex-row mb-3">
          <Text className="font-bold mr-1">Role ID: </Text>
          <Text className="text-sm">{user.roleId}</Text>
        </View>
      </View>
    </View>);
}