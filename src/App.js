// STYLES
import "./App.scss"
// REACT ROUTER
import { HashRouter, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"

// COMPONENTS
import Landing from "./pages/Landing/Landing"
import NoPage from "./pages/NoPage/NoPage"
import Enterprises from "./pages/Enterprises/Enterprises"
import EnterprisesDetail from "./pages/EnterprisesDetail/EnterprisesDetail"
import About from "./components/About/About"

function App() {
  const darkmode = useSelector((state) => state.darkmode.darkmode)
  return (
    <div className={darkmode && "App"}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index element={<About />} />
            <Route path="empresas" element={<Enterprises />} />
            <Route
              path="empresas/:nombre_empresa"
              element={<EnterprisesDetail />}
            />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
