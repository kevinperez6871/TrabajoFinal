import { useEffect, useState } from 'react' //Leer token, ejecute un codigo cuando el componente este listo
import { useParams, Link } from 'react-router-dom' //nos permitira leer los parametros de la url
import clienteAxios from '../config/axios'
import Alerta from '../components/Alerta'


const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false) //default no esta confirmada
    const [cargando, setCargando] = useState(true) //al hacer el llamado tardara un poco en traer
    const [alerta, setAlerta] = useState({})//se llena con resultado del useEffect, llamados



    const params = useParams()
    const { id } = params

    useEffect(() => {
        const confirmarCuenta = async () => {
            try {
                const url = `/veterinarios/confirmar/${id}`
                const { data } = await clienteAxios(url)
                setCuentaConfirmada(true)
                setAlerta({
                    msg: data.msg
                })

            } catch (error) {
                setAlerta({ //componente alerta revisa esta condicional 
                    msg: error.response.data.msg,
                    error: true
                })
            }

            setCargando(false)

        }
        confirmarCuenta();
    }, [])//arregle vacio para que se ejecute una vez cuando el componente este listo 


    console.log(params)

    return (
        <>
            <div>
                <h1 className="text-indigo-600 font-black text-6xl">
                    Confirma tu cuenta y comienza a administrar tus pacientes {""}
                    <span className="text-black">tus pacientes </span>
                </h1>
            </div>
            <div className="mt-20 md:mt-5 shadow-lg px-5 p-10 rounded-xl bg-white">
                {!cargando && <Alerta
                    alerta={alerta}
                />}
                {cuentaConfirmada && (
                    <Link
                        className="block text-center my-5 text-gray-500"
                        to="/">Iniciar Sesion</Link>
                )}



            </div >
        </>
    )
}

export default ConfirmarCuenta