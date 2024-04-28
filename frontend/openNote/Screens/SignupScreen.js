import { View, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { ArrowRight, Check } from 'react-native-feather';
import { UserContex, userContex } from '../App';
import { getUserByEmail, getUserFromApi, postNewUser } from '../Api';
import uuid from 'react-native-uuid';


const SignupScreen = ({navigation}) => {
  const {user, setUser} = useContext(UserContex);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [bio, setBio] = useState(null);
  
  // // logic to add new user
  // const getUser = async (userId) => {
  //   const myUser = await getUserFromApi(userId);
  //   console.log(`fetched user with id: ${userId} successfully`);
  //   setUser(myUser);
  // }
  const pushUserToDb = async () => {
    if(!username || !name || !bio || !email || !password){
      alert("One or more fields are empty");
    }
    else{
      const newUser = {
      userId: uuid.v4(),
      username: username,
      password: password,
      email: email,
      name: name,
      bio: bio,
      profileImage: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
    }
    const userExists = await getUserByEmail(email);
    if(!userExists){
      let myUser = await postNewUser(newUser);
      console.log("user created successfully!");
      setUser(myUser);
    }
    else{
      alert("User with given email already exists!")
    }
    }
  }


  return (
    <SafeAreaView className="flex-1 items-center justify-start">
      <ScrollView className="p-5 mt-2">
      {/* logo */}
      <View className="flex items-center">
      <Image
            source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/onenote-35aab.appspot.com/o/logo.png?alt=media&token=a62baf91-4192-4749-875e-0b5fb6b496a7',
            }}
            className="w-48 h-48  border-[#495057]"/>
      </View>
      <View className="">
        <KeyboardAvoidingView>
        <TextInput className="mt-5 text-xl border rounded-lg w-72 p-2 font-bold text-center" placeholder='Email' placeholderTextColor="gray" onChangeText={(text) => setEmail(text)} ></TextInput>
        <TextInput className="mt-5 text-xl border rounded-lg w-72 p-2 font-bold text-center" placeholder='Username' placeholderTextColor="gray" onChangeText={(text) => setUsername(text)} ></TextInput>
          {/* username */}
          <TextInput secureTextEntry={true} className="mt-5 text-xl border rounded-lg w-72 p-2 font-bold text-center" placeholder='Password' placeholderTextColor="gray" onChangeText={(text) => setPassword(text)} ></TextInput>
          {/* Full Name */}
          <TextInput className="mt-5 text-xl border rounded-lg w-72 p-2 font-bold text-center" placeholder='Name' placeholderTextColor="gray"  onChangeText={(text) => setName(text)} ></TextInput>
          {/* bio */}
          <TextInput className="mt-5 mb-5 text-xl border rounded-lg w-72 p-2 font-bold text-center" placeholder='Bio' placeholderTextColor="gray" multiline={true} maxLength={200}  onChangeText={(text) => setBio(text)} ></TextInput>
        </KeyboardAvoidingView>
      </View>
      <View className="mt-5 flex items-center justify-center">
        <Text className="text-blue-500" onPress={()=> navigation.navigate("Signin")}>Aready have an account? Sign In!</Text>
      </View>
      <View className="mt-10  flex items-center justify-center">
        <TouchableOpacity onPress={()=> pushUserToDb()} className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
          <ArrowRight stroke={"white"} />
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SignupScreen