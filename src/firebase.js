// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_API_KEY,
  authDomain: "react-auth-5bb46.firebaseapp.com",
  projectId: "react-auth-5bb46",
  storageBucket: "react-auth-5bb46.appspot.com",
  messagingSenderId: "922328306220",
  appId: "1:922328306220:web:64ace15d49fc877daef789"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);