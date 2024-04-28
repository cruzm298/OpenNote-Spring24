import { putToBucket } from "./services/firebase";
import uuid from 'react-native-uuid';


const uri = `https://gelding-deciding-rationally.ngrok-free.app`
export const getUserFromApi = (userId) => {
    return fetch(`${uri}/users?userId=${userId}`)
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
  };

  export const getAllNotes = ()=>{
    return fetch(`${uri}/notes`)
    .then(response => response.json())
    .then(json => {
      return json;
    })
    .catch(err => {
      console.error(err);
    })
  }
export const postNewNote = (note) => {
  return fetch(`${uri}/notes`, {
    method: 'POST',
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note)
  }).then(response => response.json())
  .then(json => {
    console.log(json)
  })
  .catch(err => {
    console.error(err);
  })
}

export const getCommentsByNoteId = (noteId)=>{
  return fetch(`${uri}/comments?noteId=${noteId}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        return json;
      })
      .catch(error => {
        console.error(error);
      }); 
}

export const getNotesFromUserId = (userId) => {
  return fetch(`${uri}/notes/user?userId=${userId}`)
      .then(response => response.json())
      .then(json => {
        return json;
      })
      .catch(error => {
        console.error(error);
      }); 
}

export const postNewUser = (user) => {
  return fetch(`${uri}/users`, {
    method: 'POST',
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  }).then(response => response.json())
  .then(json => {
    console.log(json)
    return json;
  })
  .catch(err => {
    console.error(err);
  })
  
}

export const getUserByEmail = (email) => {
  return fetch(`${uri}/users/email?email=${email}`)
      .then(response => response.json())
      .then(json => {
        // console.log(json);
        return json;
      })
      .catch(error => {
        console.error(error);
      });
}

export const postFile = async (image_blob) => {
  const id = uuid.v4();
  const url = await putToBucket(id, image_blob)
  file = {
    fileId: id,
    noteId: "test",
    fileName: id,
    fileUrl: url
  }
  return fetch(`${uri}/files`, {
    method: 'POST',
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(file)
  }).then(response => response.json())
  .then(json => {
    console.log(json)
  })
  .catch(err => {
    console.error(err);
  })
}