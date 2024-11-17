import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/axios" //trae url hasta la api 

const OlvidePassword = () => {
    const [email, setEmail] = useState("")
    const [alerta, setAlerta] = useState({})//alerta es obj porque tiene msg y error


    const handleSubmit = async (e) => //es un formulario y enviara al presionar datos
        e.preventDefault()

    if (email === "" || email.length < 6) { //requerimos el email del usuario

        setAlerta({ msg: "El Email es obligatario", error: true })
        return

    }
    try {
        const { data } = clienteAxios.post("/veterianarios/olvide-password", { email }) //llamado
        console.log(data)


    } catch (error) {
        setAlerta({
            msg: error.response.data.msg,
            error: true
        })

    }


    const { msg } = alerta


    return (
        <>

            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Recupera tu acceso  y no pierdas {""}
                    <span className="text-black">tus pacientes </span>
                </h1>
            </div>

            <div>
                <div className="mt-20 md:mt-5 shadow-lg px-5 p-10 rounded-xl bg-white">
                    <form
                        onSubmit={handleSubmit}>

                        <div className="my-5">
                            <label
                                className="uppercase text-gray-600  block text-xl font-bold"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Email de registro"
                                className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>

                        <input
                            type="submit"
                            value="Enviar instrucciones"
                            className="bg-indigo-700 w-full p-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto"
                        />


                        {msg && <Alerta
                            alerta={alerta} />}
                    </form>

                    <nav className="mt-10 lg:flex lg:justify-between">
                        <Link
                            className="block text-center my-5 text-gray-500"
                            to="/">¿Ya tienes una cuenta? Inicia Sesión</Link>
                        <Link
                            className="block text-center my-5 text-gray-500"
                            to="/registrar">¿No tienes una cuenta? Regístrate</Link>

                    </nav>
                </div>

            </div>



        </>
    )
}

export default OlvidePassword