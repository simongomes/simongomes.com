import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

export const config = {
  apiKey: "AIzaSyCkOEbFQ_8ua-v96SOWos1TGxUS-3QC7v0",
  authDomain: "simongomes-live-chat.firebaseapp.com",
  databaseURL: "https://simongomes-live-chat.firebaseio.com",
  projectId: "simongomes-live-chat",
  storageBucket: "simongomes-live-chat.appspot.com",
  messagingSenderId: "619485805025",
  appId: "1:619485805025:web:7c277e1370cfbbee",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export default firebase;
