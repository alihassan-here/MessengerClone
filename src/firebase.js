import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaesConfig = {
    apiKey: "AIzaSyBTOOpP50-_7elqCtT4vc83BqcAloZdedE",
    authDomain: "unichat-messenger-4f18e.firebaseapp.com",
    projectId: "unichat-messenger-4f18e",
    storageBucket: "unichat-messenger-4f18e.appspot.com",
    messagingSenderId: "249189635387",
    appId: "1:249189635387:web:971ecdc6da71384c67131e"
};
const app = initializeApp(firebaesConfig);
export const authentication = getAuth(app);