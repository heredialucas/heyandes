// API CALL
import { useEffect } from "react"
import { getAllEnterprises } from "../redux/apiCalls/getEnterprises"
import { useDispatch } from "react-redux"
// REACT ROUTER OUTLET
import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"

const Landing = () => {
  // GET ALL ENTERPRISES
  const dispatch = useDispatch()
  useEffect(() => {
    return () => getAllEnterprises(dispatch)
  }, [])

  return (
    <div className="Landing">
      <h1>Heredia Lucas</h1>
      <h3>
        <NavLink to="/empresas">Empresas</NavLink>
      </h3>
      <Outlet />
    </div>
  )
}

export default Landing
