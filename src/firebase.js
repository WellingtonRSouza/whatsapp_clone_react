import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAKUDRpcg3WObOAEXjKD1DvG0dNghJl8Tk",
    authDomain: "whats-app-clone-9503e.firebaseapp.com",
    databaseURL: "https://whats-app-clone-9503e.firebaseio.com",
    projectId: "whats-app-clone-9503e",
    storageBucket: "whats-app-clone-9503e.appspot.com",
    messagingSenderId: "402564136980",
    appId: "1:402564136980:web:c31966a62c28d388d22701",
    measurementId: "G-H5VWF6MR22"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;