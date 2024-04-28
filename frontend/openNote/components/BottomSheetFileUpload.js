import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'



const BottomSheetFileUpload = ({selectImage}) => {

  return (
    <SafeAreaView className="p-5 m-5">
      <TouchableOpacity className="bg-blue-600 p-5 items-center justify-center rounded-md" onPress={()=> {selectImage(false)}}>
        <Text className="text-white text-lg">Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity className="bg-blue-600 p-5 items-center justify-center rounded-md mt-5" onPress={()=> {selectImage(true)}}>
        <Text className="text-white text-lg">Choose Photo</Text>
      </TouchableOpacity>
      {/* {image?  <Image
              source={{
              uri: image
              }}
              className="w-20 h-20 rounded-full border"/> : <View></View>} */}
    </SafeAreaView>
  )
}

export default BottomSheetFileUpload;