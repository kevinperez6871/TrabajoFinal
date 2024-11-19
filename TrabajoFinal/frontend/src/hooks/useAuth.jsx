import { useContext } from "react"; //extraer datos
import AuthContext from "../context/AuthProvider";// tiene que identificar que context extrae

const useAuth = () => {

    return useContext(AuthContext)

}
export default useAuth