// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKSXaby1av5Di4OKkbaWZj--gx04fLMX4",
  authDomain: "ans-uat.firebaseapp.com",
  projectId: "ans-uat",
  storageBucket: "ans-uat.firebasestorage.app",
  messagingSenderId: "628310030591",
  appId: "1:628310030591:web:7b0a3769db22ae5ac1b4ca",
  measurementId: "G-YME8NS457Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
auth. useDeviceLanguage();