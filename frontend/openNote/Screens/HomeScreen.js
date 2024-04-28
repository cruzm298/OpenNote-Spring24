import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
  Modal,
  TouchableOpacity,
  RefreshControl,
  Image,
} from 'react-native';
import { getAllNotes, getUserFromApi } from '../Api';
import NoteCard from '../components/NoteCard';
import ErrorScreen from '../components/ErrorScreen';
import BottomSheet, { BottomSheetView, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import BottomSheetNoteView from '../components/BottomSheetNoteView';
import { UserContex, userContex } from '../App';
import { Icon } from 'react-native-elements';
import { Edit2, Search } from 'react-native-feather';

const HomeScreen = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [currNote, setCurrNote] = useState({
    title: null,
    description: null,
    upVotes: null,
    downVotes: null,
    noteId: null,
    subject: null,
    userId: null,
    creationDate: null
  });
  const [refreshing, setRefreshing] = useState(true);
  const sheetRef = useRef(null);


  const getUser = async (userId) => {
    let myUser = await getUserFromApi(userId);
    setUser(myUser);
    console.log(myUser);
  }

  const getNotes = async () => {
    setRefreshing(true);
    let fetchedNotes = await getAllNotes()
    setNotes(fetchedNotes);
    console.log(fetchedNotes);
    setRefreshing(false); 
  }


  const handleOnRefresh = ()=>{
    // getUser("55d13a97-39db-44e8-92d7-f7306325bacf");
    getNotes();
  }

  const handleNotePress = useCallback((index, note)=>{
    setCurrNote(note);
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, [])

  const renderBackDrop = useCallback((props)=>{
    <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />
  }, []);


  useEffect(()=>{
    // getUser("55d13a97-39db-44e8-92d7-f7306325bacf");
    setUser(UserContex);
    getNotes();
  }, []);
    return (
      // Miguel code
      <View className="flex-1 ">
        <StatusBar barStyle="dark-content" />
        {!notes || !user || notes.length == 0? <ErrorScreen errorMessage="Dang! Notebook looking empty :(" />
         : 
         <View className="px-2">
            <View className="flex-row absolute  z-50  top-12 px-1 items-center justify-around w-full ">
              <View className="flex-row w-10/12 rounded-full bg-white items-center p-2 border border-gray-3 ml-2">
                  <View className="flex-row flex-1 ">
                    <Search stroke={"gray"} />
                    <TextInput placeholder='Search' className="ml-2 text-bold"></TextInput>
                  </View>
              </View>
              <View className="ml-2">
                <TouchableOpacity className=" w-10 h-10 rounded-full"
                onPress={()=> navigation.navigate('Profile')}>
                  <Image
                  source={{
                  uri: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
                  }}
                  className="w-10 h-10 p-2 rounded-full border" />
                </TouchableOpacity>
              </View>
            </View>
          <ScrollView className="" showsVerticalScrollIndicator="false"
            refreshControl={
              <RefreshControl 
              refreshing={refreshing}
              onRefresh={handleOnRefresh}/>
            }
          >
            <View className="h-28 w-full ">
            </View>
          {notes.map((note) => (
            <NoteCard key={note.id} note={note} onCardPress={()=> {handleNotePress(0, note)}} />
          ))}
          <View className="flex-row space-y-2 px-4 pb-2 h-10">
            {/* leave this div, it is for spacing purposes */}
          </View>

        </ScrollView>  
        </View>}
        <BottomSheet
         ref={sheetRef} 
         snapPoints={["60%", "95%"]} 
         enablePanDownToClose="true"
         onClose={()=> setIsOpen(false)}
         index={-1}
         backdropComponent={renderBackDrop}
         >
        <BottomSheetView >
          <BottomSheetNoteView note={currNote}/>
        </BottomSheetView>
      </BottomSheet>
      {!isOpen ? 
      <TouchableOpacity className="flex flex-1 items-center justify-center bg-blue-600 w-[74px] h-[74px] absolute bottom-14 right-6 rounded-full"
      onPress={()=> {navigation.navigate('New-Note')}}>
      <Edit2 stroke={"white"}/>
    </TouchableOpacity>
    : <View></View>
      }
      {/* <TouchableOpacity className="flex flex-1 items-center justify-center bg-blue-600 w-20 h-20 absolute bottom-14 right-6 rounded-full"
        onPress={()=> {navigation.navigate('New-Note')}}>
        <Edit2 stroke={"white"}/>
      </TouchableOpacity> */}
      </View>

    );
}

export default HomeScreen