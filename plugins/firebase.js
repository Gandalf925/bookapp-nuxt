// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA46JRL_kHFRZ4h3LuMUHyL8I4p1PSShEo",
  authDomain: "nuxt-spa-book-app-58409.firebaseapp.com",
  projectId: "nuxt-spa-book-app-58409",
  storageBucket: "nuxt-spa-book-app-58409.appspot.com",
  messagingSenderId: "364985228540",
  appId: "1:364985228540:web:7b5a12adb64ca9921c4b79"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default (context, inject) => {
  inject('firebase', firebaseApp)
}
