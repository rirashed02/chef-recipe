// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB__3sWJMlSNjgiyaww6bD4PeGTbDyvifk",
  authDomain: "chef-recipe-hunter-e4085.firebaseapp.com",
  projectId: "chef-recipe-hunter-e4085",
  storageBucket: "chef-recipe-hunter-e4085.appspot.com",
  messagingSenderId: "1031934615281", 
  appId: "1:1031934615281:web:a50879117db2f980875350"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;