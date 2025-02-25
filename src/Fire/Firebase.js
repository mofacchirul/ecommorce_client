// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKmZtYX8QpsLOQL1yhI9QX0NxF18fgexI",
  authDomain: "ecommercer-fd50c.firebaseapp.com",
  projectId: "ecommercer-fd50c",
  storageBucket: "ecommercer-fd50c.firebasestorage.app",
  messagingSenderId: "234282139892",
  appId: "1:234282139892:web:7dfc6781d85a9aac65dea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;