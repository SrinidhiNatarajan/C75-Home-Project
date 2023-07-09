import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCt4rIKTMQxS7nmc-3x5NtlrE7Wm_xvK_8",
  authDomain: "e-ride-79298.firebaseapp.com",
  projectId: "e-ride-79298",
  storageBucket: "e-ride-79298.appspot.com",
  messagingSenderId: "971538280648",
  appId: "1:971538280648:web:b11666ceb8d22c7c1375fd"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
