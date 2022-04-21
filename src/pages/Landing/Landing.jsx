// STYLES
import style from "./Landing.module.scss"
// API CALL
import { useEffect } from "react"
import { getAllEnterprises } from "../../redux/apiCalls/getEnterprises"
import { useDispatch, useSelector } from "react-redux"
// REACT ROUTER OUTLET
import { Outlet, useLocation } from "react-router"
import { NavLink } from "react-router-dom"
// CALL FUNCTION TO FILTER PATH
import filterPath from "../../helpers/filterPath"
// CALL FUNCTION TO DARK MODE
import onSetDarkmode from "../../redux/apiCalls/setDarkmode"

const Landing = () => {
  const darkmode = useSelector((state) => state.darkmode.darkmode)
  const location = useLocation()
  const path = filterPath(location)
  // GET ALL ENTERPRISES
  const dispatch = useDispatch()
  useEffect(() => {
    return () => getAllEnterprises(dispatch)
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
      <NavLink
        className={darkmode ? style.navLinkDarkmode : style.navLink}
        to="/empresas"
      >
        {path}
      </NavLink>
      <Outlet />
    </div>
  )
}

export default Landing
