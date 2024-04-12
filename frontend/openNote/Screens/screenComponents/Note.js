import React from "react";
import {View, Text} from "react-native";

const Note = () => {
    const noteInfo = [
        {
            noteTitle: "Sample Note",
            postNoteUser: require("https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png"),
            postNote: require("https://images.ctfassets.net/l3l0sjr15nav/4CtQReuK0REtEPNJnyVUfn/733c08b9d69189b9e6963cdad857dbe9/free-sample-pdf-to-download.jpg")
        }
    ];

    
    return (
        <View>
            {noteInfo.map((data, index) => {
                return (
                    <View
                        key={index}
                        style={{
                            paddingBottom: 10,
                            borderBottomColor: 'gray',
                            borderBottomWidth: 0.1,
                        }}>
                        <View 
                            style = {{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 30,
                        }}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image
                                    source={data.postNoteUser}
                                    style={{width: 40, height: 40, borderRadius: 100}}
                                />
                                <View style={{paddingLeft: 5}}>
                                    <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                                        {data.noteTitle}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                );
            })}
        </View>
    );
};

export default Note;