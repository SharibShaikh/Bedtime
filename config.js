import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBWdJNlxvNawGJCpfw4wXrXfptP2FDHYkw",
    authDomain: "bedtimestories-39ff8.firebaseapp.com",
    projectId: "bedtimestories-39ff8",
    storageBucket: "bedtimestories-39ff8.appspot.com",
    messagingSenderId: "891231464054",
    appId: "1:891231464054:web:9b605f81efc57e95ef0d57"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

 