import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import NoteMetrics from './NoteMetrics';
import CommentView from './CommentView';
import ErrorScreen from './ErrorScreen';
import { getCommentsByNoteId } from '../Api';
import ImageView from "react-native-image-viewing";



const BottomSheetNoteView = ({note}) => {
  const [comments, setComments] = useState([]);
  const [visible, setIsVisible] = useState(false);

    
    
    const openImageViewer = ()=>{
      setIsVisible(true)
    }

    useEffect(()=>{
      // getComments(note.noteId);
      // console.log("Tried fetching comments")
    }, [])
  return (
    <SafeAreaView className="p-5 m-5">
      <Text className="text-3xl font-bold">{note.title}</Text>
      <Text className="text-xl mt-3">{note.description}</Text>
      <View className="flex  p-2 justify-center mt-2">
          <TouchableOpacity onPress={()=> openImageViewer()}>
          <Image className="w-20 h-20 bg-red-200"
          source={{
            uri:note.fileUri
          }} />
          </TouchableOpacity>
        </View>
      <View className="mt-3">
        <NoteMetrics />
      <View className="mt-5">
        <Text className="text-xl font-medium">Comments</Text>
      <View className="mt-5">
      <View className="flex  h-screen">
        <CommentView noteId={note.noteId} />
      </View>
      </View>
      </View>
      </View>
      <ImageView
        images={[{
          uri: note.fileUri
        }]}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
      </SafeAreaView>
  )
}

export default BottomSheetNoteView