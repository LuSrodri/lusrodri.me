import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import data from './projects.json';

const firebaseConfig = {
    apiKey: "AIzaSyBhm3-O5eyzJZvtQal3HYjWDsIm7VwGPh4",
    authDomain: "lusrodri.firebaseapp.com",
    projectId: "lusrodri",
    storageBucket: "lusrodri.appspot.com",
    messagingSenderId: "856048279195",
    appId: "1:856048279195:web:ea7eb8ca091066468db03e",
    measurementId: "G-R42675SRD9"
};

export async function getProjectsFromDatabase() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const docRef = doc(db, "lusrodri", process.env.REACT_APP_USER_DATABASE);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        let dataResult = await docSnap.data().projects;
        //console.log("Document getted from database successfully!");
        return dataResult;
    } else {
        //console.log("Document getted from local file successfully!");
        return data.projects;
    }
}
