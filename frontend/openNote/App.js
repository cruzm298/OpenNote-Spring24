import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cog6ToothIcon, HomeIcon, PencilIcon, UserIcon } from "react-native-heroicons/solid";
import HomeScreen from './Screens/HomeScreen';
import NotesScreen from './Screens/NotesScreen';
import SettingsScreen from './Screens/SettingsScreen';
import ProfileScreen from './Screens/ProfileScreen';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" 
        component={HomeScreen} options={{
          tabBarIcon: ()=>{
            <HomeIcon />
          }
        }}/>
        <Tab.Screen name="Notes" component={NotesScreen} options={{
          tabBarIcon: ()=>{
            <PencilIcon />
          }
        }} />
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarIcon: ()=>{
            <Cog6ToothIcon />
          }
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarIcon: ()=>{<UserIcon />}
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

