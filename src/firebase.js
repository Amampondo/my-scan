// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUHRjnG-9NU0K474DJ3Dpy1nptrMEwQTk",
  authDomain: "check-out-app-d8e40.firebaseapp.com",
  projectId: "check-out-app-d8e40",
  storageBucket: "check-out-app-d8e40.appspot.com",
  messagingSenderId: "25324202199",
  appId: "1:25324202199:web:97d1f0e807e4f8ceed6892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;