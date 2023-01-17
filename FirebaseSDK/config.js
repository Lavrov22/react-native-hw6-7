import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAVLzvpJYkqntRJZ__XxfAFsXQsJN-60_4",
    authDomain: "react-native-hw-6-7.firebaseapp.com",
    projectId: "react-native-hw-6-7",
    storageBucket: "react-native-hw-6-7.appspot.com",
    messagingSenderId: "161980834157",
    appId: "1:161980834157:web:4cf199f403980d9dbcba64",
    measurementId: "G-F8FSE7VMVE"
  };

const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

export { auth };
