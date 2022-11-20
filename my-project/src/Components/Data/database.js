import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

import data from './projects.json';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY || "",
    authDomain: process.env.REACT_APP_AUTHDOMAIN || "",
    projectId: process.env.REACT_APP_PROJECTID || "",
    storageBucket: process.env.REACT_APP_STORAGEBUCKET || "",
    messagingSenderId: process.env.REACT_APP_MESSAGESENDERID || "",
    appId: process.env.REACT_APP_APPID || "",
    measurementId: process.env.REACT_APP_MEASUREMENTID || ""
};

export async function getProjectsFromDatabase() {

    try {
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        const docRef = doc(db, "lusrodri", process.env.REACT_APP_USER_DATABASE);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let dataResult = await docSnap.data().projects;
            // console.log("Document getted from database successfully!");
            return dataResult;
        }
        // console.log("Document getted from local file successfully!");
        return data.projects;
    } catch (error) {
        // console.log("Error getting document:", error);
        return data.projects;
    }
}
