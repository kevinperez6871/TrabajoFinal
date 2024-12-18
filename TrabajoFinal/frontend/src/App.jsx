import { BrowserRouter, Routes, Route } from "react-router-dom"
import AuthLayout from "./layout/AuthLayout"
import RutaProtegida from "./layout/RutaProtegida"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import OlvidePassword from "./paginas/OlvidePassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import NuevoPassword from "./paginas/NuevoPassword"
import AdministrarPacientes from "./paginas/AdministrarPacientes"
import NavBar from "./components/NavBar"

import { AuthProvider } from "./context/AuthProvider"

function App() {

    console.log(import.meta.env.IMAGENES_URL)
    return (

        <>
            <NavBar></NavBar>
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route path="/" element={<AuthLayout />}>
                            <Route index element={<Login />} />
                            <Route path="registrar" element={<Registrar />} />
                            <Route path="olvide-password" element={<OlvidePassword />} />
                            <Route path="olvide-password/:token" element={<NuevoPassword />} />
                            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
                        </Route>
                        <Route path="/admin" element={<RutaProtegida />}>
                            <Route index element={<AdministrarPacientes />} />



                        </Route>

                    </Routes>
                </AuthProvider>

            </BrowserRouter>
        </>
    )
}

export default App
