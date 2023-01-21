import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import dotenv from 'dotenv'
dotenv.config()

const clientCredentials = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
}

if(!firebase.apps.length){
    firebase.initializeApp(clientCredentials)
}

export default firebase