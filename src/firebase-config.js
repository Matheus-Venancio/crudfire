import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore" 
const firebaseConfig = {
    apiKey: "AIzaSyAjFii0Pi9eC4iRqCyGdiCED1XwWvSZuPo",
    authDomain: "crud-fire-bb918.firebaseapp.com",
    projectId: "crud-fire-bb918",
    storageBucket: "crud-fire-bb918.appspot.com",
    messagingSenderId: "503934774654",
    appId: "1:503934774654:web:5d85b7dceec2a1c4e2172f",
    measurementId: "G-9TWJ0PYSJ7"
  };

  const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);