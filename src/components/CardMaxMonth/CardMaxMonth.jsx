// STYLES
import style from "./CardMaxMonth.module.scss"
// CALL FUNCTION TO FIND MAX MONTH
import findMaxMonth from "../../helpers/findMaxMonth"

function Card({ enterprises }) {
  if (enterprises?.length > 0) {
    const maxAgency = findMaxMonth(enterprises)
    return (
      <div className={style.Card}>
        <h1>Mes Más Ventas</h1>
        <h3>{maxAgency}</h3>
      </div>
    )
  } else {
    return <></>
  }
}

export default Card
