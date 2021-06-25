import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBe-u0XLP-ydAzluATMDEUmMzGKBTb25sI",
    authDomain: "linkedin-clone-yt-77e71.firebaseapp.com",
    projectId: "linkedin-clone-yt-77e71",
    storageBucket: "linkedin-clone-yt-77e71.appspot.com",
    messagingSenderId: "703398220669",
    appId: "1:703398220669:web:1e80e56db519f51566f214"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };