const { initializeApp, applicationDefault } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const fs = require('fs');
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
        const doc = await docRef.get();

        if (!doc.exists) {
            console.log('No such document!');
        } else {
            fs.writeFileSync('./projects.json', JSON.stringify(doc.data()))
        }

        console.log("Document writted successfully!");
    } catch (e) {
        console.error("Occurred an error: ", e);
    }
}
