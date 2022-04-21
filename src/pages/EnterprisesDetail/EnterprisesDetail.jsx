// STYLES
import style from "./EnterprisesDetail.module.scss"
// REACT
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
// CALL FUNCTION TO FORMATE DATA
import formatedDataDetail from "../../helpers/formatedDataDetail"
// CALL LOADING COMPONENT
import Loading from "../../components/Loading/Loading"
// MATERIAL UI TABLE
import { DataGrid } from "@mui/x-data-grid"
import { enterprisesColumns } from "../../config/schemaDataGrid/columnsDetail"

const EnterprisesDetail = () => {
  const Enterprises = useSelector((state) => state.enterprises.enterprises)
  const [enterprises, setEnterprises] = useState([])

  const nameAgency = useParams().nombre_empresa

  useEffect(() => {
    const enterpriseByDetail = formatedDataDetail(Enterprises, nameAgency)
    setEnterprises(enterpriseByDetail)
  }, [Enterprises])

  return (
    <>
      {enterprises?.length > 0 ? (
        <div className={style.container}>
          <div className={style.containerDataGrid}>
            <DataGrid
              className="enterprises-grid"
              rows={enterprises}
              columns={enterprisesColumns}
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

export default EnterprisesDetail
