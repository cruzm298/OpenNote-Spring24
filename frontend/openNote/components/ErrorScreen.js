import { View, Text } from 'react-native'
import React from 'react'
import { } from "react-native-feather";
import * as emoji from "emoji-dictionary";


const ErrorScreen = ({errorMessage}) => {
  return (
    <View className="flex flex-grow items-center justify-center">
        <Text className="text-3xl font-thin text-gray-400">{emoji.getUnicode("broken_heart")}</Text>
      <Text className="text-2xl font-thin text-gray-400">{errorMessage}</Text>
    </View>
  )
}

export default ErrorScreen