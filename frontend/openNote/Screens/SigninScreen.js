import { View, Text, SafeAreaView, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { ArrowRight } from 'react-native-feather';
import { UserContex, userContex } from '../App';
import { getUserByEmail, getUserFromApi, postNewUser } from '../Api';
import uuid from 'react-native-uuid';


const SigninScreen = ({navigation}) => {
  const {user, setUser} = useContext(UserContex);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  // logic to add new user
  const getUser = async () => {
    const myUser = await getUserByEmail(email);
    if(myUser){
        console.log(`fetched user with email: ${email} successfully`);
        if(email == myUser.email && password == myUser.password){
          setUser(myUser);
        }
        else{
          alert("Invalid Credentials!")
        }
    }
    else{
        console.log(`User not found on db`)
        alert("Invalid Credentials!")
    }
    // setUser(myUser);
  }



  return (
    <SafeAreaView className="flex-1 items-center justify-start">
      <ScrollView className="p-5 mt-2">
      {/* logo */}
      <View className="flex items-center">
      <Image
            source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/onenote-35aab.appspot.com/o/logo.png?alt=media&token=bc26194c-abd5-4615-9d4b-476ff50f5a1f",
            }}
            className="w-48 h-48  border-[#495057]"/>
      </View>
      <View className="">
        <KeyboardAvoidingView>
          {/* username */}
          <TextInput className="mt-5 text-xl border rounded-lg w-72 p-2 font-bold text-center" placeholder='Email' placeholderTextColor="gray" onChangeText={(text) => setEmail(text)} ></TextInput>
          <TextInput secureTextEntry={true} className="mt-5 text-xl border rounded-lg w-72 p-2 font-bold text-center" placeholder='Password' placeholderTextColor="gray" onChangeText={(text) => setPassword(text)} ></TextInput>
        </KeyboardAvoidingView>
      </View>
      <View className="mt-5 flex items-center justify-center">
        <Text className="text-blue-500" onPress={()=> navigation.navigate("Signup")}>Don't have an account? Sign Up!</Text>
      </View>
      <View className="mt-10  flex items-center justify-center">
        <TouchableOpacity onPress={()=> getUser()} className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
          <ArrowRight stroke="white"/>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default SigninScreen