import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export default function NotFound() {

    const [Timer, SetTimer] = useState(5)
    const regresoPagina = useNavigate()


    useEffect(() => {
        const intervalo = setInterval(() => {
            if (Timer > 0) {
                SetTimer((anterior) => anterior - 1);
            }
        }, 1000);

        if (Timer === 0) {
            regresoPagina("/");
        }

        return () => clearInterval(intervalo);
    }, [Timer, regresoPagina]);

    return (
        <>
            <div className="textlol">
                <h2>Sección no Encontrada</h2>
                <h2>Redirigiendo en {Timer} segundos</h2>
            </div>
        </>
    )
}