// REACT
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
// STYLES
import style from "./Enterprises.module.scss"
// COMPONENTS
import CardMaxAgency from "../../components/CardMaxAgency/CardMaxAgency"
import CardMaxMonth from "../../components/CardMaxMonth/CardMaxMonth"
// DATATABLE MUI
import { DataGrid } from "@mui/x-data-grid"
import { enterprisesColumns } from "../../config/schemaDataGrid/columns"
// CALL FUNCTION TO FORMAT ENTERPRISE DATA
import formatedData from "../../helpers/formatedData"
// IMPORT LOADING
import Loading from "../../components/Loading/Loading"

const Enterprises = () => {
  const Enterprises = useSelector((state) => state.enterprises.enterprises)
  const [enterprises, setEnterprises] = useState([])

  useEffect(() => {
    const enterpriseByFinalPrice = formatedData(Enterprises)
    setEnterprises(enterpriseByFinalPrice)
  }, [Enterprises])

  const anexo = {
    field: "detalle",
    headerName: "Detalle",
    width: 200,
    renderCell: (params) => {
      return (
        <NavLink to={`/empresas/${params.row.nameAgency}`}>Detalle</NavLink>
      )
    },
  }

  return (
    <>
      {enterprises.length > 0 ? (
        <div className={style.container}>
          <div className={style.containerCard}>
            <CardMaxAgency enterprises={enterprises} />
            <CardMaxMonth enterprises={Enterprises} />
          </div>
          <div className={style.containerDataGrid}>
            <DataGrid
              className="enterprises-grid"
              rows={enterprises}
              columns={enterprisesColumns.concat(anexo)}
              pageSize={9}
              rowsPerPageOptions={[9]}
            />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  )
}

export default Enterprises
