// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcgQkCA01cw6R8mrDwSTNNzXwPnTIUFrE",
  authDomain: "smarttecztrendz-552.firebaseapp.com",
  databaseURL: "https://smarttecztrendz-552.firebaseio.com",
  projectId: "smarttecztrendz-552",
  storageBucket: "smarttecztrendz-552.appspot.com",
  messagingSenderId: "699292907042",
  appId: "1:699292907042:web:460d0cbe2d6dd434437c7b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
