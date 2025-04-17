import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyASPJTGbuk2HfNhCErepleBNGsW2hNcIS8",
    authDomain: "prepwise-7011f.firebaseapp.com",
    projectId: "prepwise-7011f",
    storageBucket: "prepwise-7011f.firebasestorage.app",
    messagingSenderId: "653532227085",
    appId: "1:653532227085:web:2c126c72946810ea669744",
    measurementId: "G-C2GZB5VY4K"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) :getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);