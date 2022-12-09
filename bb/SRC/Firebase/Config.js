import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDDliicbBwPgGtMYaQWJ8SsyU15Zb5UDmk",
  authDomain: "ezedu-cbff1.firebaseapp.com",
  projectId: "ezedu-cbff1",
  storageBucket: "ezedu-cbff1.appspot.com",
  messagingSenderId: "1004111141013",
  appId: "1:1004111141013:web:d422df1b223c17d74b239c"
};

if(!firebase.apps.lenght){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};