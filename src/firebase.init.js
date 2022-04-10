// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBejmFLS1srL81iPaxQztdJVwhN-r9el9o",
  authDomain: "ema-jhon-c933a.firebaseapp.com",
  projectId: "ema-jhon-c933a",
  storageBucket: "ema-jhon-c933a.appspot.com",
  messagingSenderId: "814288792808",
  appId: "1:814288792808:web:10e064837d7626aa33ad5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app)

export default auth