// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoXWm_XApD0xcu4p1HdHGaPsSVlBcpW68",
    authDomain: "todo-list-loginsdata.firebaseapp.com",
    projectId: "todo-list-loginsdata",
    storageBucket: "todo-list-loginsdata.firebasestorage.app",
    messagingSenderId: "1014651759192",
    appId: "1:1014651759192:web:1f80b70dd7ae76073e382d",
    measurementId: "G-LRTJWMLMWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth};