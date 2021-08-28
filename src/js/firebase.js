import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const config = {
    apiKey: "AIzaSyAkPDxAl7FldL-K9yG6WMDG_Mou91nvD5A",
    authDomain: "shareconomy-a1c77.firebaseapp.com",
    projectId: "shareconomy-a1c77",
    storageBucket: "shareconomy-a1c77.appspot.com",
    messagingSenderId: "1073930988552",
    appId: "1:1073930988552:web:26c3a3a7486f696169f5bd"
};

const app = initializeApp(config);
const db = getFirestore(app);

export {db}