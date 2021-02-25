import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0krGAx1NtVOd1cTap5b-h1FKNCfIq4JA",
    authDomain: "findit-28a91.firebaseapp.com",
    projectId: "findit-28a91",
    storageBucket: "findit-28a91.appspot.com",
    messagingSenderId: "574792841871",
    appId: "1:574792841871:web:9037a9e96fea73c0744efa"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();