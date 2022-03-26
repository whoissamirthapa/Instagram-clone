// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { 
    getStorage,
    ref, 
    uploadBytes, 
    listAll,
    getDownloadURL 
} from "firebase/storage";

import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyAkyv1-mHPqWSiPSTJPeelNjLTUAbCqri0",
  authDomain: "instaclone2423.firebaseapp.com",
  projectId: "instaclone2423",
  storageBucket: "instaclone2423.appspot.com",
  messagingSenderId: "472296440559",
  appId: "1:472296440559:web:f3d3ac08b7bd263c5ad11a",
  measurementId: "G-62QD75C9Y3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const storage = getStorage();


//sign up function
export const signup = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

//sign in 
export const signIn = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
//sign out 
export const logOut = () =>{
    return signOut(auth);
}

//geting auth value 
export function GettingAuthData(){
    const [currentUser,setCurrentUser] = useState();

    useEffect(()=>{
        const Unsubscribe = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        })
        
        return Unsubscribe
    })
    return currentUser;
}

//Storage image
export const upload= async(file, currentUser, setLoading)=>{
    const random = Math.floor(Math.random()*1000);
    const fileRef = ref(storage,"images/"+currentUser.uid+random+".png");
    
    setLoading(true);
    await uploadBytes(fileRef, file);
    setLoading(false);
    alert("file uploaded successfully!!")
}

//listing files

export const listImages =async(folder)=>{
    
    const fileArray = [];
    const listRef = ref(storage, folder);
    await listAll(listRef)
    .then((res)=>{
    res.items.forEach((itemRef)=>{
            getDownloadURL(itemRef).then((url)=>{
               fileArray.push(url);
            })
            
        })
    })
    .catch((error)=>{
        //console.log(error);
    })
    //console.log(fileArray)
    return fileArray;
}


