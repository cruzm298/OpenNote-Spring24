import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import React from 'react'
import { BottomSheetTextInput} from '@gorhom/bottom-sheet';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Send } from 'react-native-feather';


const CommentInput = () => {
  return (
      <View className="flex-row p-2 bg-slate-200  items-center justify-center">
        <View className="flex items-center justify-center">
        <Image
              source={{
              uri: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
              }}
              className="w-10 h-10 rounded-full border"/>
        </View>
        <View className="flex flex-row flex-1  border rounded-lg mx-2 p-1 px-2 items-center justify-between">
        <BottomSheetTextInput className="flex flex-1 border rounded-lg text-md" placeholder='Enter your comment here..' multiline={true} />
        <View className="flex items-center justify-center">
        <TouchableOpacity className="bg-blue-600 p-2 rounded-full">
          <Send stroke={"white"}/>
        </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

export default CommentInput