import { getEnterprises } from "../reducers/enterprises"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

export const getAllEnterprises = async (dispatch) => {
  try {
    const res = await getDocs(collection(db, "enterprises"))
    res.forEach((doc) => {
      dispatch(getEnterprises(doc.data()))
    })
  } catch (error) {
    console.log(error)
  }
}
