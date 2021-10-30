import firebase from 'firebase/app';

const firebaseConfig  = {
    apiKey: "AIzaSyBYkHwI9nz1tApKN8nJZG-UBdg-acRbhwc",
    authDomain: "tenedores-bf178.firebaseapp.com",
    projectId: "tenedores-bf178",
    storageBucket: "tenedores-bf178.appspot.com",
    messagingSenderId: "672463876464",
    appId: "1:672463876464:web:91ca438a36961171975fb5"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
