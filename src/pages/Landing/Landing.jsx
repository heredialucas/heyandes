// STYLES
import style from "./Landing.module.scss"
// API CALL
import { useEffect } from "react"
import { getAllEnterprises } from "../../redux/apiCalls/getEnterprises"
import { useDispatch } from "react-redux"
// REACT ROUTER OUTLET
import { Outlet, useLocation } from "react-router"
import { NavLink } from "react-router-dom"
// CALL FUNCTION TO FILTER PATH
import filterPath from "../../helpers/filterPath"

const Landing = () => {
  const location = useLocation()
  const path = filterPath(location)
  // GET ALL ENTERPRISES
  const dispatch = useDispatch()
  useEffect(() => {
    return () => getAllEnterprises(dispatch)
  }, [])

  return (
    <div>
      <h1 className={style.titleName}>Heredia Lucas</h1>
      <NavLink className={style.navLink} to="/empresas">
        {path}
      </NavLink>
      <Outlet />
    </div>
  )
}

export default Landing
