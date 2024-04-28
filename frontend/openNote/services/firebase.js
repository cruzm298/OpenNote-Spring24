// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";
import uuid from 'react-native-uuid';





const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: "onenote-35aab.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const putToBucket = async (image_blob)=>{
  let id = uuid.v4();
  console.log("ID: ", id)
  const storageRef = ref(storage, id);
  await uploadBytes(storageRef, image_blob).then((snapshot)=>{
    console.log('Uploaded file!')
    
  })
  const url = await getDownloadURL(ref(storage, id));
  return url;
  // console.log("URL: ", url)
  // return url
}
