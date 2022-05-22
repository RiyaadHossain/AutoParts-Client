import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBVJr0tJP4tiqy_T_Y4YmFCyzYukMbVZNA",
  authDomain: "auto-parts-001.firebaseapp.com",
  projectId: "auto-parts-001",
  storageBucket: "auto-parts-001.appspot.com",
  messagingSenderId: "864282546459",
  appId: "1:864282546459:web:f8c3ec90362383385cc3be"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth