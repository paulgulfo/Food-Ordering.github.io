// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4alJ4EwWvkypjQRgmuABGkQqK3deGhDg",
  authDomain: "food-ordering-3b775.firebaseapp.com",
  projectId: "food-ordering-3b775",
  storageBucket: "food-ordering-3b775.firebasestorage.app",
  messagingSenderId: "1012287372956",
  appId: "1:1012287372956:web:33df54fcb18b5106157759",
  measurementId: "G-KGEMNP9THF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);