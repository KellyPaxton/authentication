import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGqYPrG49nZuk-yfJfxlKMhWlXpYzH3C8",
  authDomain: "authentic-ation.firebaseapp.com",
  projectId: "authentic-ation",
  storageBucket: "authentic-ation.appspot.com",
  messagingSenderId: "443024409555",
  appId: "1:443024409555:web:fed39f451d07fc0a666526",
  measurementId: "G-EG4WZ6486V"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
