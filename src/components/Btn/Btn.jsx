// STYLES
import style from "./Btn.module.scss"
// REACT
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

export default function Btn({ path, location }) {
  const darkmode = useSelector((state) => state.darkmode.darkmode)

  return (
    <>
      <NavLink
        className={darkmode ? style.navLinkDarkmode : style.navLink}
        to="/empresas"
      >
        {path}
      </NavLink>
      {location.pathname !== "/" && (
        <NavLink
          className={darkmode ? style.navLinkDarkmode : style.navLink}
          to="/"
        >
          {"Volver a intro"}
        </NavLink>
      )}
    </>
  )
}
