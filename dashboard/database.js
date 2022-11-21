const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const data = require('./projects.json');


async function addProjectsToDatabase() {
    try {
        initializeApp({
            credential: applicationDefault()
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

module.exports = { addProjectsToDatabase };