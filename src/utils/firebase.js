// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvkNasGos8Lu_R7708qCrjM-3R22fQZ5c",
  authDomain: "netflix-gpt-3c705.firebaseapp.com",
  projectId: "netflix-gpt-3c705",
  storageBucket: "netflix-gpt-3c705.appspot.com",
  messagingSenderId: "830808933638",
  appId: "1:830808933638:web:53c2c7bc10baac94bf8a87",
  measurementId: "G-S8K1122LFC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase auth
export const auth = getAuth();