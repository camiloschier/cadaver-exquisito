import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBzH1ZU3h15Eu_G-u1GPhKNrwvRj_INDX4",
    authDomain: "cadaver-exquisito-72bb1.firebaseapp.com",
    databaseURL: "https://cadaver-exquisito-72bb1.firebaseio.com",
    projectId: "cadaver-exquisito-72bb1",
    storageBucket: "cadaver-exquisito-72bb1.appspot.com",
    messagingSenderId: "706778133702",
    appId: "1:706778133702:web:009b4460bfb8df75fad3c7",
    measurementId: "G-4ZM9CD0WXJ"
  };

  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();
  export const firestore = firebase.firestore();