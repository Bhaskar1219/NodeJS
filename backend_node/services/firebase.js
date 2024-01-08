const firebase = require('firebase-admin');
const serviceAccount = require("../firebase_key.json");

// initialise firebase admin   
firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
  });

const db = firebase.firestore();  
const auth = firebase.auth();
const storage = firebase.storage();

module.exports = {
    firebase,
    db,
    auth,
    storage,
};