import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cog6ToothIcon, HomeIcon, PencilIcon, UserIcon } from "react-native-heroicons/solid";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from './screens/ProfileScreen';
import NewNoteScreen from './screens/NewNoteScreen';
import CommentBottomSheet from './components/BottomSheetNoteView';
import { View, Text, SafeAreaView } from 'react-native';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import SignupScreen from './screens/SignupScreen';
import { getUserFromApi } from './Api';
import SigninScreen from './screens/SigninScreen';
import { createStackNavigator } from '@react-navigation/stack';




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const UserContex = createContext(null); 

export default function App() {
  const [user, setUser] = useState(null);


  const getUser = async (userId) => {
    let myUser = await getUserFromApi(userId)
    setUser(myUser);
    console.log(user);
  };


  return (
      <UserContex.Provider value={{user, setUser}}>
        {!user? 
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen
              name="Signin"
              component={SigninScreen}
              modal
            />
            <Stack.Screen name="Signup" component={SignupScreen} />
          </Stack.Navigator>
        </NavigationContainer> : 
        <GestureHandlerRootView className="flex-1">
        {/* <NavigationContainer>
          <Tab.Navigator screenOptions={{
            headerShown: false
          }}>
            <Tab.Screen name='HomeScreen'
            component={HomeScreen} />
            <Tab.Screen name='Profile'
            component={ProfileScreen} />
            <Tab.Screen name='New-Note'
            component={NewNoteScreen} />
          </Tab.Navigator>
        </NavigationContainer> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              modal
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="New-Note" component={NewNoteScreen} />
          </Stack.Navigator>
        </NavigationContainer> 
      </GestureHandlerRootView> 
      }
      </UserContex.Provider>
  );
}

