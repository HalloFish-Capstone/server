const firebase = require('../db');

const authUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const idToken = authHeader.split(" ")[1];
        firebase.auth().verifyIdToken(idToken)
    } catch (error) {
        res.status(400).send(error.message);
    }
}