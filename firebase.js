import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp ( {
  apiKey: "AIzaSyBEbouemBY1BLnFh4NETar3PitX-l5QZWE",
    authDomain: "socialmedia-f4f52.firebaseapp.com",
    projectId: "socialmedia-f4f52",
    storageBucket: "socialmedia-f4f52.appspot.com",
    messagingSenderId: "943203784046",
    appId: "1:943203784046:web:a01b2da56b7fb4bf76dd7f",
    measurementId: "G-LGFKGVKVRH"
});
  const auth= firebase.auth();
  const db=firebaseConfig.firestore();
  const storage=firebase.storage();

export { auth, db, storage};