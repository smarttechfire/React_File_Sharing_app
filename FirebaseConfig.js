// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr86NeIYObAdCWCWhexdyZOgD45whMf4A",
  authDomain: "file-sharing09117.firebaseapp.com",
  projectId: "file-sharing09117",
  storageBucket: "file-sharing09117.appspot.com",
  messagingSenderId: "233871555932",
  appId: "1:233871555932:web:c557a29cccfe96862a5599",
  measurementId: "G-TPYDJ7DEYF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
