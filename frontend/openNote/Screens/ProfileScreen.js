/* In this modified code:

I've added a header section with a profile icon on the left and the number of notes the user has uploaded on the right, similar to Instagram's profile page.
Below the header, I display a grid view of notes using FlatList.
We still have to replace dummyNotes with actual notes data fetched from the API. */

import React, { useContext, useEffect, useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  SectionList,
  SafeAreaView,
  RefreshControl
} from 'react-native';
import { getNotesFromUserId, getUserFromApi } from '../Api';
import NoteCard from '../components/NoteCard';
import ErrorScreen from '../components/ErrorScreen';
import { UserContex} from '../App';
import { Home, LogOut, Menu } from 'react-native-feather';


const ProfileScreen = ({navigation}) => {
  const {user, setUser} = useContext(UserContex);
  const [notes, setNotes] = useState(null);
  const [refreshing, setRefreshing] = useState(true);

  const getUser = async (userId) => {
    // let myUser = await getUserFromApi(userId);
    // let myUser = useContext(UserContex);
    console.log(myUser)
    setUser(myUser);
  };

  const getNotes = async () => {
    setRefreshing(true);
    setNotes([])
    let userNotes = await getNotesFromUserId(user.userId);
    console.log("notes: ")
    console.log(userNotes)
    setNotes(userNotes);
    setRefreshing(false);

  }

  const handleOnRefresh = ()=>{
    getNotes();
  }
  const logout = () => {
    setUser(null);
  }

  useEffect(() => {
    getUser("55d13a97-39db-44e8-92d7-f7306325bacf");
    getNotes("55d13a97-39db-44e8-92d7-f7306325bacf");
  }, []);
// [#f8f9fa]
  return !user ? (
    <Text>Waiting</Text> 
  ) : (
    <View className="flex-col flex-1 bg-transparent">
      <View className="h-10 bg-[#f8f9fa] flex items-end">
      </View>
      {/* Profile Information */}
      <View className="flex-col p-5 z-30 shadow- bg-[#f8f9fa]">
      <View className=" flex flex-row items-center justify-center">
        <View className=" flex flex-1 items-start justify-center">
          <Text className="font-bold text-4xl text-blue-600 italic">OpenNote</Text>
        </View>
        <TouchableOpacity onPress={()=> logout()} className="p-2 w-10">
              <LogOut stroke={"black"}/>
        </TouchableOpacity>
      </View>
        {/* Profile Metrics (including profile image) */}
        <View className="flex-row flex-grow items-center justify-between mt-2">
          <View className="p-2">
          <Image
              source={{
              uri: user.profileImage,
              }}
              className="w-20 h-20 rounded-full border"/>
          </View>
              {/* note count */}
          <View className="flex-row flex-grow items-center justify-between p-2">
          <View className="flex-col w-20 items-center p-1 justify-between">
            <Text className="text-2xl font-bold">{notes? notes.length : 0}</Text>
            <Text className="text-md mt-2">Notes</Text>
          </View>
          {/* following */}
          <View className="flex-col w-20 items-center  p-1 justify-between">
            <Text className="text-2xl font-bold">0</Text>
            <Text className="text-md mt-2">Followers</Text>
          </View>
          {/* followers */}
          <View className="flex-col w-20 items-center  p-1 justify-between">
            <Text className="text-2xl font-bold">0</Text>
            <Text className="text- mt-2">Following</Text>
          </View>
          </View>
          
        </View>
        {/* Prfofile Information */}
        <View className="flex-col p-1items-start justify-between my-2 ml-2">
              <Text className="font-bold text-lg">{user.name}</Text>
              <Text className="mt-1 font-bold">{user.username}</Text>
              <Text className="mt-1 ">{user.bio}</Text>
        </View>
      </View>
      <View className="h-2 bg-[#f8f9fa] shadow-lg"></View>
      {/* User Notes */}
      <ScrollView className="p-5 mb-2"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleOnRefresh}/>
      }>
      {!notes || notes.length == 0? <ErrorScreen errorMessage="No Notes yet.." />
      :
      notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))
      }
      <View className="h-20">
        {/* placeholder */}
      </View>
      </ScrollView>
      
      <TouchableOpacity className="flex flex-1 items-center justify-center bg-blue-600 w-[74px] h-[74px] absolute bottom-14 right-6 rounded-full"
        onPress={()=> {navigation.navigate('Home')}}>
        <Home stroke={"white"}/>
      </TouchableOpacity>
    </View>
  );
}

export default ProfileScreen
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
