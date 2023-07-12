// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAFx8C-n_eM3TY4VE0p_TQ01rviXmtzb34",
  authDomain: "almasa-f4d1e.firebaseapp.com",
  projectId: "almasa-f4d1e",
  storageBucket: "almasa-f4d1e.appspot.com",
  messagingSenderId: "641549268334",
  appId: "1:641549268334:web:695487eda5055838cffd7f",
  measurementId: "G-QK61X63C8D"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export {auth , fireStore,storage};

