import { View, Text, FlatList, SectionList, Keyboard } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommentCard from './CommentCard'
import {BottomSheetScrollView} from "@gorhom/bottom-sheet";
import CommentInput from './CommentInput';
import { getCommentsByNoteId } from '../Api';
import ErrorScreen from './ErrorScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';



const CommentView = ({noteId}) => {
    const [comments, setComments] = useState([{
        commentId: 1,
        comment: "Hey There!"
    }]);

    const getComments = async (noteId)=>{
        const coms = await getCommentsByNoteId(noteId);
        console.log("fetched comments for: ", noteId)
        console.log(coms)
        // setComments(coms);
    }

    useEffect(()=>{
        getComments(noteId);
    }, [noteId])
  return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <ScrollView className="flex h-80" overScrollMode='true'>
            <View className="flex h-32">
                <CommentInput />
                {!comments || comments.length == 0 ? <ErrorScreen errorMessage="No comments yet.." />
                    :
                    <View className="">
                    {/* {comments.map((comment)=>{
                        <CommentCard key={comment.commentId} comment={comment}/>
                    })} 
                    {/* <CommentCard /> */}
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </View>}
            </View>
            </ScrollView>
        </TouchableWithoutFeedback>
  )
}

export default CommentView