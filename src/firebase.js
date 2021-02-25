import firebase from 'firebase/app';
import "firebase/auth";
// https://www.youtube.com/watch?v=PKwu15ldZ7k

const app = firebase.initializeApp ({
apiKey: "AIzaSyA0krGAx1NtVOd1cTap5b-h1FKNCfIq4JA",
authDomain: "findit-28a91.firebaseapp.com",
projectId: "findit-28a91",
storageBucket: "findit-28a91.appspot.com",
messagingSenderId: "574792841871",
appId: "1:574792841871:web:9037a9e96fea73c0744efa"
});

export const auth = app.auth();
export default app
