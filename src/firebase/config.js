import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";          
import { getFirestore } from "firebase/firestore"; 

// Naka-hardcode nang direkta para siguradong mabasa ng GitHub Pages build
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

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;