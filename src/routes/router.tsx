import { Route, Routes } from "react-router-dom"
import { Layout } from "../components/organismos/Layout"
import { Home } from "../pages/Home"
import { Trabajos } from "../pages/Trabajos"
import { Contacto } from "../pages/Contacto"
import { Conocenos } from "../pages/Conocenos"

export const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/trabajos" element={<Trabajos />} />
      </Route>
    </Routes>
  )
}
