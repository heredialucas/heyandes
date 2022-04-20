import { db } from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import { Enterprises } from "../../sales"

export function addEnterprises() {
  try {
    Enterprises.forEach(async (enterprise) => {
      await addDoc(collection(db, "enterprises"), enterprise)
    })
  } catch (error) {
    console.log(error)
  }
}
