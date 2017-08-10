import Firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: '<API_KEY>',
  authDomain: '<PROJECT_ID>.firebaseapp.com',
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
  storageBucket: '<BUCKET>.appspot.com',
  messagingSenderId: '<SENDER_ID>'
}

// Initialize the app
const firebaseApp = Firebase.initializeApp(config)

export const db = firebaseApp.database()
