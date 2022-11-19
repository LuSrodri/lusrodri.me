// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc } = require("firebase/firestore");
const data = require('./projects.json');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhm3-O5eyzJZvtQal3HYjWDsIm7VwGPh4",
    authDomain: "lusrodri.firebaseapp.com",
    projectId: "lusrodri",
    storageBucket: "lusrodri.appspot.com",
    messagingSenderId: "856048279195",
    appId: "1:856048279195:web:ea7eb8ca091066468db03e",
    measurementId: "G-R42675SRD9"
};

async function addProjectsToDatabase() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    try {
        await setDoc(doc(db, "lusrodri", "projects"), {
            projects: data.projects,
            user: process.env.USER_DATABASE
        });

        console.log("Document writted successfully!");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

module.exports = { addProjectsToDatabase };