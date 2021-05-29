import firebase from 'firebase/app'

import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBCImkWyZfo8pdj51so44p3wKLmuU_IXAQ",
    authDomain: "reactube1.firebaseapp.com",
    projectId: "reactube1",
    storageBucket: "reactube1.appspot.com",
    messagingSenderId: "17199535480",
    appId: "1:17199535480:web:9f63edccf8f27f886ae48d"
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()