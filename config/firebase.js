// config/firebase.js
const admin = require('firebase');

admin.initializeApp({
    apiKey: "AIzaSyDE9G1FeHjwTFzVpHx2nUE_ROpwyM7ipZw",
    authDomain: "samchikitsa-96a4d.firebaseapp.com",
    projectId: "samchikitsa-96a4d",
    storageBucket: "samchikitsa-96a4d.appspot.com",
    messagingSenderId: "901173838593",
    appId: "1:901173838593:web:2f30c443538c413e69d100",
    measurementId: "G-6TE1JXH2DZ"
  });

module.exports.firebaseAdmin = admin;
