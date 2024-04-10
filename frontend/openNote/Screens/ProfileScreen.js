/* In this modified code:

I've added a header section with a profile icon on the left and the number of notes the user has uploaded on the right, similar to Instagram's profile page.
Below the header, I display a grid view of notes using FlatList.
We still have to replace dummyNotes with actual notes data fetched from the API. */

import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { getUserFromApi } from '../Api';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const [notes, setNotes] = useState([]);

  const getUser = async (userId) => {
    let myUser = await getUserFromApi(userId);
    setUser(myUser);
    setNotes(myUser.notes); // Assuming notes are fetched with the user data
  };

  useEffect(() => {
    getUser(1);
  }, []);

  // Dummy data for notes, replace with actual data
  const dummyNotes = [
    { id: 1, image: 'https://via.placeholder.com/150', caption: 'Note 1' },
    { id: 2, image: 'https://via.placeholder.com/150', caption: 'Note 2' },
    { id: 3, image: 'https://via.placeholder.com/150', caption: 'Note 3' },
    { id: 4, image: 'https://via.placeholder.com/150', caption: 'Note 4' },
  ];

  return !user ? (
    <Text>Waiting</Text>
  ) : (
    <View style="flex-1 items-center justify-center p-20 bg-[#f0f4f7]">
      {/* Profile header */}
      <View style="flex-row items-center justify-between w-full mb-5">
        {/* Profile icon */}
        <TouchableOpacity style="ml-2">
          <Image
            source={{
              uri: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
            }}
            style="w-10 h-10 rounded-full"
          />
        </TouchableOpacity>
        {/* Number of notes */}
        <Text style="text-xl font-bold">{notes.length}</Text>
      </View>

      {/* Grid view of notes */}
      <FlatList
        data={dummyNotes} // Use 'notes' instead of 'dummyNotes' with actual data
        numColumns={3}
        renderItem={({ item }) => (
          <View style="flex-1 aspect-ratio-1">
            <Image
              source={{ uri: item.image }}
              style="flex-1 rounded-lg"
              resizeMode="cover"
            />
            <Text style="text-sm text-center mt-2">{item.caption}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        style="flex-1 w-full"
      />
    </View>
  );
}

/* The old code is commented out below just for reference in case my new code breaks things */


/* import React, { useEffect, useState } from 'react';
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
*/
