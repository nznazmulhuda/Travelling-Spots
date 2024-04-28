// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnXHVh4cUiRISpTuB241S-hF7uaK6nt7A",
    authDomain: "earth-preview-9130a.firebaseapp.com",
    projectId: "earth-preview-9130a",
    storageBucket: "earth-preview-9130a.appspot.com",
    messagingSenderId: "1097561252900",
    appId: "1:1097561252900:web:09789462e2039fe85d24b1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);