import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAz-Mz4lAzbWw6mxIXZkGkGjMQEJcXgaOw",
  authDomain: "todolist-ac4b8.firebaseapp.com",
  projectId: "todolist-ac4b8",
  storageBucket: "todolist-ac4b8.appspot.com",
  messagingSenderId: "123715021403",
  appId: "1:123715021403:web:b788b8de27dce3e5f2ed7e"
};

const app = initializeApp(firebaseConfig);

// auth 
export const auth = getAuth(app)

// Initialize Cloud Firestore and get reference to the service
export const db = getFirestore(app)