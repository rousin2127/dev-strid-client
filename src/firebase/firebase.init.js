// Import the functions you need from the SDKs you need
//this is Danger do not come hare 


import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABkFWFdkd7dXa7FqcYDtzISKNvWTKM_UI",
  authDomain: "dev-stride-89da6.firebaseapp.com",
  projectId: "dev-stride-89da6",
  storageBucket: "dev-stride-89da6.firebasestorage.app",
  messagingSenderId: "215366780193",
  appId: "1:215366780193:web:2370869b34970e10532a60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);