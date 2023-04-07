import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyC3zTtqf2Yg7M5w9_-eXmLc2IXvGj91w70",
  authDomain: "photo-sharing-3c733.firebaseapp.com",
  projectId: "photo-sharing-3c733",
  storageBucket: "photo-sharing-3c733.appspot.com",
  messagingSenderId: "1006893617212",
  appId: "1:1006893617212:web:2be4197414faec4685f339",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
