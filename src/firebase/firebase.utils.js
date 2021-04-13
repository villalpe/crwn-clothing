import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyAHd16M9Ixb_pyHz1FyGlArOviyuVkRWFk",
        authDomain: "crwn-db-6e203.firebaseapp.com",
        projectId: "crwn-db-6e203",
        storageBucket: "crwn-db-6e203.appspot.com",
        messagingSenderId: "360915021885",
        appId: "1:360915021885:web:f0aeb7e53a76cdf8be3a54",
        measurementId: "G-27F696H054"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
