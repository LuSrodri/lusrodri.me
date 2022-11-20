const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const data = require('./projects.json');


async function addProjectsToDatabase() {
    // Initialize Firebase
    initializeApp({
        credential: applicationDefault()
    });
    const db = getFirestore();

    const docRef = db.collection('lusrodri').doc(process.env.USER_DATABASE);

    try {
        await docRef.set({
            projects: data.projects
        });

        console.log("Document writted successfully!");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

module.exports = { addProjectsToDatabase };