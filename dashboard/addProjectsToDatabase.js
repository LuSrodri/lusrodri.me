const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const data = require('./projects.json');
require('dotenv').config();

getProjectsFromDatabase();

async function getProjectsFromDatabase() {
    try {
        initializeApp({
            credential: applicationDefault(),
            databaseURL: 'https://lusrodri.firebaseio.com'
        });
        const db = getFirestore();
        const docRef = db.collection('lusrodri').doc(process.env.USER_DATABASE);
        await docRef.set({
            projects: data.projects
        });

        console.log("Document writted successfully!");
    } catch (e) {
        console.error("Occurred an error: ", e);
    }
}
