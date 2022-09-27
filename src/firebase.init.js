import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO-uEV3cJzXBz4Cmx3qZUniwOuIFzAw9k",
  authDomain: "life-recovery-f582f.firebaseapp.com",
  projectId: "life-recovery-f582f",
  storageBucket: "life-recovery-f582f.appspot.com",
  messagingSenderId: "120355227307",
  appId: "1:120355227307:web:f2093eb82be4940baa99ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
