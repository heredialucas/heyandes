// STYLES
import "./App.css"
// REACT ROUTER
import { BrowserRouter, Routes, Route } from "react-router-dom"

// COMPONENTS
import Landing from "./pages/Landing/Landing"
import NoPage from "./pages/NoPage/NoPage"
import Enterprises from "./pages/Enterprises/Enterprises"
import EnterprisesDetail from "./pages/EnterprisesDetail/EnterprisesDetail"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}>
            <Route index path="empresas" element={<Enterprises />} />
            <Route
              path="empresas/:nombre_empresa"
              element={<EnterprisesDetail />}
            />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
