import firebaseConfig from "./config.js";
import firebase from "firebase/app/dist/index.cjs.js?"
import 'firebase/firestore/dist/index.node.cjs.js';


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;

