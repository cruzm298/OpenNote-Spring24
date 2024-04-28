import { View, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity, Text } from 'react-native'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import FloatingActionButton from '../components/FloatingActionButton';
import { getAllNotes, getUserFromApi, postNewNote } from '../Api';
import uuid from 'react-native-uuid';
import * as ImagePicker from "expo-image-picker";
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import BottomSheetFileUpload from '../components/BottomSheetFileUpload';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { Check, Paperclip, XCircle } from 'react-native-feather'
import { getCommentsByNoteId, postFile } from '../Api';
import * as FileSystem from 'expo-file-system';
import { putToBucket } from '../services/firebase';
import { UserContex } from '../App';
 



const NewNoteScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  const [image, setImage] = useState(null)
  const {user, setUser} = useContext(UserContex);
  // const [imageUri, setImageUri] = useState("test");

  const sheetRef = useRef(null);

  const renderBackDrop = useCallback((props)=>{
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  }, []);

  const handleNotePress = useCallback((index)=>{
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, [])

  const uploadImageToFirebaseStorage = async (base64String) => {
    try {
      const blob = await fetch(`${base64String}`).then((res)=> res.blob())
      console.log("BLOB: ", blob)
      const url = await putToBucket(blob);
      return url;
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  const selectImage = async (useLibrary) => {
		let result;
		const options = {
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		};

    if (useLibrary) {
			result = await ImagePicker.launchImageLibraryAsync(options);
		} else {
			await ImagePicker.requestCameraPermissionsAsync();
			result = await ImagePicker.launchCameraAsync(options);
		}
		if (!result.canceled) {
      const file_url = result.assets[0].uri
      // console.log(result.assets[0])
      const file_base64_string = await FileSystem.readAsStringAsync(file_url, {
        encoding: FileSystem.EncodingType.Base64
      })
      file_base64 = `data:image/jpeg;base64,${file_base64_string}`;
      const image_blob = await (await fetch(file_base64)).blob()
      console.log(image_blob)
      setImage(file_base64)
      sheetRef.current?.close();
      // const res = await postFile(image_blob);
      // const url = await putToBucket(image_blob);
      // setImage(url);
      // console.log("IMAGE: ", image)
		}
  }


  const removeImage = ()=>{
    setImage(null);
    alert("image removed!")
  }
  const postNote = async ()=> {
    if(!title || !description || !subject){
      alert("Title, Description, or Subject can't be empty!")
      console.log(title)
      console.log(description)
      console.log(subject)
    }
    else{
      const date = new Date();
      const note = {
        title: title,
        description: description,
        subject: subject,
        creationDate: date.getTime(),
        userId: user.userId,
        noteId: uuid.v4(),
        fileUri: await uploadImageToFirebaseStorage(image),
      }
      console.log(note);
      await postNewNote(note);
    }
  }
  return (
    <SafeAreaView>
      <ScrollView className="h-screen ">
      <View className="flex flex-1 p-5">
        <View className="flex basis-10/12 p-1">
          <KeyboardAvoidingView className="">
            <TextInput className="text-2xl rounded-sm p-2 font-bold" placeholder='Title' placeholderTextColor="gray" autoFocus={true} onChangeText={(text) => setTitle(text)} ></TextInput>
            <TextInput className="text-2xl rounded-sm p-2 mt-2 w-30 h-auto" cursorColor="green" placeholder='Description' multiline={true} maxLength={300} onChangeText={(text) => setDescription(text)}></TextInput>
            <TextInput className="text-xl rounded-sm p-2" placeholder='Subject' placeholderTextColor="gray" onChangeText={(text) => setSubject(text)}></TextInput>
          </KeyboardAvoidingView>
        </View>
        <View>
        </View>
        <View>
        {image? <View className="flex  p-2 w-24">
          <TouchableOpacity className="absolute z-10 top-0 right-0" onPress={()=> removeImage()}>
            <XCircle stroke={"black"} />
          </TouchableOpacity>
          <Image className="w-20 h-20 bg-red-200"
          source={{
            uri:image
          }} />
        </View> : 
        <TouchableOpacity className="border w-full h-10 items-center justify-center rounded-full mt-5" onPress={()=> {handleNotePress(0)}}>
            <Paperclip />
        </TouchableOpacity>}
        </View>
        <View className="flex flex-grow items-center justify-center mt-10">
          {/* <FloatingActionButton onPress={postNote}/> */}
          <TouchableOpacity className="flex mr-5 rounded-full bg-blue-600 w-16 h-16 items-center justify-center"
            onPress={()=> {
              console.log("action button pressed!")
              postNote();
            }}>
              <Check stroke="white" />
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
    <BottomSheet
         ref={sheetRef} 
         snapPoints={["60%", "95%"]} 
         enablePanDownToClose="true"
         onClose={()=> setIsOpen(false)}
         index={-1}
         backdropComponent={renderBackDrop}
         >
        <BottomSheetView >
          <BottomSheetFileUpload selectImage={selectImage}/>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  )
}

export default NewNoteScreen