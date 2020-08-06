import app from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDKDNozrx1VQcNGXoFVPZfpZaIqgPX4MQk",
  authDomain: "crud-react-14449.firebaseapp.com",
  databaseURL: "https://crud-react-14449.firebaseio.com",
  projectId: "crud-react-14449",
  storageBucket: "crud-react-14449.appspot.com",
  messagingSenderId: "84152230499",
  appId: "1:84152230499:web:499cdf1155f2c7fc788e56"
};


class Firebase {
  constructor() {
    // Initialize Firebase
    app.initializeApp(config);
    this.db = app.firestore()
  }
 
  getCollection = collectionName => this.db.collection(collectionName)
  getDoc = IdDoc => this.db.doc(`users/${IdDoc}`)
}

export default Firebase