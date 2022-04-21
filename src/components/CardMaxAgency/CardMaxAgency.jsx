// STYLES
import style from "./CardMaxAgency.module.scss"
// CALL FUNCTION TO FIND MAX AGENCY
import findMaxAgency from "../../helpers/findMaxAgency"

function Card({ enterprises }) {
  if (enterprises?.length > 0) {
    const maxAgency = findMaxAgency(enterprises)
    return (
      <div className={style.Card}>
        <h1>{maxAgency[0]}</h1>
        <h3>{maxAgency[1]}</h3>
      </div>
    )
  } else {
    return <></>
  }
}

export default Card
