import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXwmmPX0Hsj83Fwwv2uHLk-pBAKSjZdDI",
  authDomain: "book-catalog-872b7.firebaseapp.com",
  projectId: "book-catalog-872b7",
  storageBucket: "book-catalog-872b7.appspot.com",
  messagingSenderId: "474454185102",
  appId: "1:474454185102:web:caf59c83ce603dfc80e5df",
  measurementId: "G-YNHYP45NPP",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
