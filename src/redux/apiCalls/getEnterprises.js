import { getEnterprises } from "../reducers/enterprises"
import { getDocs, collection } from "firebase/firestore"
import { db } from "../../config/firebase/firebaseConfig"

export const getAllEnterprises = async (dispatch) => {
  try {
    const res = await getDocs(collection(db, "enterprises"))
    res.forEach((doc) => {
      const setIdToEnterprises = {
        ...doc.data(),
        id: doc.id,
      }
      dispatch(getEnterprises(setIdToEnterprises))
    })
  } catch (error) {
    console.log(error)
  }
}
