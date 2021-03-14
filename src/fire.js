// https://www.youtube.com/watch?v=cFgoSrOui2M
import firebase from 'firebase'
import "@firebase/firestore"
import "@firebase/storage"
var firebaseConfig = {
 apiKey: "AIzaSyA0krGAx1NtVOd1cTap5b-h1FKNCfIq4JA",
 authDomain: "findit-28a91.firebaseapp.com",
 projectId: "findit-28a91",
 storageBucket: "findit-28a91.appspot.com",
 messagingSenderId: "574792841871",
 appId: "1:574792841871:web:9037a9e96fea73c0744efa"
}

const fire = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default fire;

