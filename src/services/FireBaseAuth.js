import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
const VITE_API_KEYS = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: `${VITE_API_KEYS}`,
  authDomain: "sample-d39a9.firebaseapp.com",
  projectId: "sample-d39a9",
  storageBucket: "sample-d39a9.appspot.com",
  messagingSenderId: "1052767691906",
  appId: "1:1052767691906:web:a50da03840f8a78478009b"
};

const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);