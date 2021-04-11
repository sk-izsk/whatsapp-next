import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBzyHQe--LJCzi3g-VZHe1XDehv2s_Z2L8',
  authDomain: 'izsk-whatsapp.firebaseapp.com',
  projectId: 'izsk-whatsapp',
  storageBucket: 'izsk-whatsapp.appspot.com',
  messagingSenderId: '153459061359',
  appId: '1:153459061359:web:87e7b12ada99ea0a3ed39a',
}

const app: firebase.app.App = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

const db: firebase.firestore.Firestore = app.firestore()

const auth: firebase.auth.Auth = app.auth()

const provider: firebase.auth.GoogleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
