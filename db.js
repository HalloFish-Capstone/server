const firebase = require('firebase-admin');
const config = require('./config');
const serviceAccount = require('./serviceAccountKey.json')

const db = firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount)
});

module.exports = db;