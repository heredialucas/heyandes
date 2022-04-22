import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAqDy4qWSKkAK5ykhke2IbJBm6HfNUBzg8",
  authDomain: "heyandes-31ca9.firebaseapp.com",
  projectId: "heyandes-31ca9",
  storageBucket: "heyandes-31ca9.appspot.com",
  messagingSenderId: "459861026111",
  appId: "1:459861026111:web:054c8796db7d5b73dc1f8a",
  measurementId: "G-SDJ6FXWSSZ",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
