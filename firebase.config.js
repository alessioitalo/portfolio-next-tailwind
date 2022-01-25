// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCCnCf_3DKuGUxEvkB6K5TVJXkT3sNBmWI",
  authDomain: "alessioitalo-portfolio.firebaseapp.com",
  projectId: "alessioitalo-portfolio",
  storageBucket: "alessioitalo-portfolio.appspot.com",
  messagingSenderId: "694816634761",
  appId: "1:694816634761:web:246a17371bbf9546ea5358"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()

// Initialize Firebase
