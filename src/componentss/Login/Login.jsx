import "./Login.css"
import { useDispatch } from "react-redux"
import { changeUserName } from "../../Redux/slices/UserName"
import { useNavigate } from "react-router-dom"
import { useState } from "react"



export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const funcionNombre = (e) => {
        SetUserNombre(e.target.value)
    }

    const [UserNombre, SetUserNombre] = useState("")

    const changeSesion = (e) => {
        navigate("/")
        if (UserNombre === "") {
            dispatch(changeUserName("Iniciar Sesión"))
        } else {
            dispatch(changeUserName(UserNombre))
        }
    }

    return (
        <>
            <div className="loginDiv">
                <h1>Login</h1>

                <div className="sectionInput">
                    <h3>Nombre de Usuario</h3>
                    <input
                        type="text"
                        maxLength={18}
                        placeholder="Ingresa tu Username"
                        value={UserNombre}
                        onChange={funcionNombre} />
                </div>

                <div className="sectionInput">
                    <h3>Contraseña</h3>
                    <input type="text" placeholder="Ingresa tu Password" />
                </div>

                {/* Esto no funciona porque nidea de backend :v */}
                <div className="sectionBtn">
                    <input
                        type="button"
                        value="Iniciar Sesión"
                        onClick={changeSesion} />

                    <h3 className="contraBait">
                        Olvidaste tu Contraseña?</h3>
                </div>
            </div>
        </>
    )
}