import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDHJMw7vJftyh7R-63MNzuUUhjDMjPBrX4",
  authDomain: "slack-clone-bbe60.firebaseapp.com",
  projectId: "slack-clone-bbe60",
  storageBucket: "slack-clone-bbe60.appspot.com",
  messagingSenderId: "151839869110",
  appId: "1:151839869110:web:128ab5351df34cf5fc7e17",
  measurementId: "G-3YXSYQXDYT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db }