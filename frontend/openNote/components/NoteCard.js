import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ArrowUpCircle, ArrowDownCircle, MessageSquare, FileText } from "react-native-feather";
import { getUserFromApi } from '../Api';
import { userContex } from '../App';



const NoteCard = ({note, onCardPress}) => {
    const [upVoteButtonColor, setUpVoteButtonColor] = useState("none");
    const [downVoteButtonColor, setDownVoteButtonColor] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const [noteUser, setNoteUser] = useState(null);
    const [time, setTime] = useState(null);

    const formatTime = ()=>{
        const date = new Date(note.creationDate);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime);
    }

    const getUser = async (userId) => {
        let myUser = await getUserFromApi(userId);
        setNoteUser(myUser);
      };
    
      useEffect(()=>{
        getUser(note.userId);
        formatTime();
      }, [])

    const handleButtonPress = ()=>{
        console.log("button pressed!")
        if(upVoteButtonColor == "red"){
            setUpVoteButtonColor("none")
            console.log(upVoteButtonColor)
        }
        else{
            setDownVoteButtonColor("red")
            console.log(upVoteButtonColor)
        }
    }
  return (
    <View className="flex bg-[#e9ecef] w-full h-72 rounded-lg mb-5 p- shadow-sm" >
              {/* profile snapshot */}
        <View className="flex-row bg-[#dee2e6] items-center justify-between">
            <View className="flex flex-row items-center p-2">
            {/* profile image */}
            <Image
            source={{
            uri: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png',
            }}
            className="w-6 h-6 rounded-full border border-[#495057]"/>
            {/* username */}
            {!noteUser? <Text>Test</Text> : <Text className="ml-2 font-bold text-md">{noteUser.username}</Text>}
            </View>
            {/* subject */}
            <View className="flex-row items-center justify-evenly p-2">
                <Text className="m-1">{}</Text>
            </View>
        </View>
        <TouchableOpacity activeOpacity={1} onPress={onCardPress} className="flex justify-evenly flex-grow p-2">
                {/* title */}
                <Text className="text-2xl font-bold">{note.title}</Text>
                {/* Description */}
                <Text numberOfLines={4} className="text-lg ">{note.description}</Text>
                {/* File attachement */}
        </TouchableOpacity>

        {/* note metrics */}
        <View className="flex flex-row bg-[#ced4da] p-2">
            {/* upvote button and metric*/}
            <View className="flex-row items-center flex-grow">
                <TouchableOpacity onPress={()=>{handleButtonPress()}}>
                    <ArrowUpCircle stroke="black" fill={upVoteButtonColor} />
                </TouchableOpacity>
                <Text className="ml-1">{note.upVotes}</Text>
            </View>
            {/* downvote button */}
            <View className="flex-row items-center flex-grow">
                <ArrowDownCircle stroke="black" />
                <Text className="ml-1">{note.upVotes}</Text>
            </View>
            {/* #of comments metric */}
            <View className="flex-row items-center flex-grow">
                <TouchableOpacity onPress={()=> {console.log("comment pressed!")}}>
                    <MessageSquare stroke="black" />
                </TouchableOpacity>
                <Text className="ml-1">20</Text>
            </View>
            {/* time */}
            <View className="flex-row items-center flex-grow">
                <Text className="ml-1">{time}</Text>
            </View>
            {/* tags */}
            <View className="flex-row items-center flex-grow">
                <Text className="ml-1">#html</Text>
                <Text className="ml-1">#css</Text>
            </View>
        </View>
    </View>
  )
}

export default NoteCard