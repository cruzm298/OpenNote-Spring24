import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Check } from 'react-native-feather'

const FloatingActionButton = ({onPress}) => {
  return (
  <TouchableOpacity className="flex mr-5 rounded-full bg-blue-600 w-16 h-16 items-center justify-center"
  
  onPress={()=> {
    console.log("action button pressed!")
    onPress();
  }}>
    <Check stroke="white" />
  </TouchableOpacity>
  )
}

export default FloatingActionButton