import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getUserFromApi } from '../Api';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CommentCard = ({comment}) => {
    // const [user, setUser] = useState({
    //     userId: null,
    //     username: null,
    //     profileImage: null
    // });
    const [time, setTime] = useState(null)

    // const getUser = async (userId) => {
    //     let myUser = await getUserFromApi(userId);
    //     setUser(myUser);
    //   };
    
    
    const formatTime = ()=>{
        const date = new Date(comment.creationDate);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        setTime(strTime);
    }

    useEffect(()=>{
        // getUser(comment.userId)
    }, [])
  return (
    <View className="flex-row p-2 bg-slate-200  items-center justify-center mt-2">
        <View className="flex items-center justify-center">
        <Image
              source={{
              uri: "https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png",
              }}
              className="w-10 h-10 rounded-full border"/>
        </View>
        <View className="flex flex-row flex-1  rounded-lg p-2 items-start justify-between">
            <View className="flex flex-1">
                <Text className="font-bold">username</Text>
                <Text className="mt-1">Lorem ipsum dolor sit amet, consectetur </Text>
            </View>
        </View>
    </View>
  )
}

export default CommentCard