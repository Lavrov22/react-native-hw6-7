import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXlI_z2FjZ0kDPejuevNR8VyhNYvLdz6A",
    authDomain: "myfirstreactnativeapp-dc0c3.firebaseapp.com",
    projectId: "myfirstreactnativeapp-dc0c3",
    storageBucket: "myfirstreactnativeapp-dc0c3.appspot.com",
    messagingSenderId: "740364385104",
    appId: "1:740364385104:web:65866ea2a52ad9358c0a55"
  };

const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
