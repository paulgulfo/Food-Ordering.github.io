import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4alJ4EwWvkypjQRgmuABGkQqK3deGhDg",
  authDomain: "food-ordering-3b775.firebaseapp.com",
  projectId: "food-ordering-3b775",
  storageBucket: "food-ordering-3b775.firebasestorage.app",
  messagingSenderId: "1012287372956",
  appId: "1:1012287372956:web:33df54fcb18b5106157759",
  measurementId: "G-KGEMNP9THF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;