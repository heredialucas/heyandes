import { onDarkmode } from "../reducers/darkmode"

const onSetDarkmode = (dispatch, data) => {
  try {
    dispatch(onDarkmode(data))
  } catch (error) {
    console.log(error)
  }
}
export default onSetDarkmode
