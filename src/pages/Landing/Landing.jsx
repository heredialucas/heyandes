// STYLES
import style from "./Landing.module.scss"
// API CALL
import { useEffect } from "react"
import { getAllEnterprises } from "../../redux/apiCalls/getEnterprises"
import { useDispatch } from "react-redux"
// REACT ROUTER OUTLET
import { Outlet, useLocation } from "react-router"
// CALL FUNCTION TO FILTER PATH
import filterPath from "../../helpers/filterPath"
// CALL FUNCTION TO DARK MODE
import onSetDarkmode from "../../redux/apiCalls/setDarkmode"
// IMPORT COMPONENT BTN
import Btn from "../../components/Btn/Btn"

const Landing = () => {
  const location = useLocation()
  const path = filterPath(location)
  // GET ALL ENTERPRISES
  const dispatch = useDispatch()
  useEffect(() => {
    getAllEnterprises(dispatch)
  }, [])

  // DARK MODE FUNCTION
  function handleDarkmode() {
    onSetDarkmode(dispatch, true)
  }

  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
        <h1 className={style.titleName}>Heredia Lucas</h1>
        <div onClick={handleDarkmode} className={style.darkmode}>
          <span>Dark Mode</span>
        </div>
      </div>
      <div className={style.containerBtn}>
        <Btn path={path} location={location} />
      </div>
      <Outlet />
    </div>
  )
}

export default Landing
