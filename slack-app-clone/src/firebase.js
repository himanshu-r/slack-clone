import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2GbekeUvDoUALD1zLiVWqqspDjZkA7QA",
    authDomain: "slack-clone-7465b.firebaseapp.com",
    projectId: "slack-clone-7465b",
    storageBucket: "slack-clone-7465b.appspot.com",
};

const firebaseApp  = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebaseApp.auth.GoogleAuthProvider();

export {db, auth, provider}
