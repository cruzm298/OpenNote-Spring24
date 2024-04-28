import { View, Text, TouchableOpacity } from 'react-native'
import { ArrowDownCircle, ArrowUpCircle, MessageSquare } from 'react-native-feather';

import React from 'react'

const NoteMetrics = () => {
  return (
    <View className="flex flex-row">
    {/* upvote button and metric*/}
    <View className="flex-row items-center flex-grow">
        <TouchableOpacity onPress={()=>{handleButtonPress()}}>
            <ArrowUpCircle stroke="black"/>
        </TouchableOpacity>
        <Text className="ml-1">100</Text>
    </View>
    {/* downvote button */}
    <View className="flex-row items-center flex-grow">
        <ArrowDownCircle stroke="black" />
        <Text className="ml-1">100</Text>
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
        <Text className="ml-1">12:00PM</Text>
    </View>
    {/* tags */}
    <View className="flex-row items-center flex-grow">
        <Text className="ml-1">#html</Text>
        <Text className="ml-1">#css</Text>
    </View>
</View>
  )
}

export default NoteMetrics