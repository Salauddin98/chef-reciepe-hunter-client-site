// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWaVE7mfTPtjNkJNafKVF1hvRGwxXCxwI",
  authDomain: "chef-food-project.firebaseapp.com",
  projectId: "chef-food-project",
  storageBucket: "chef-food-project.appspot.com",
  messagingSenderId: "366459457122",
  appId: "1:366459457122:web:cff12b734cd54bcac14b3b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
