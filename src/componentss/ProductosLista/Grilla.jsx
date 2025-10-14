import * as React from 'react';
import "./css/Productos.css"
import "./css/ProductosPhone.css"
import Productito from "./Product.jsx"
import Checador from "./CheckBoxChanger/CustomCheckbox.jsx"
import data from "/src/JsonDB/productListTest.json"
import { useSelector } from 'react-redux';



export default function Grilla() {

    // const de checado para el checkbox
    const [Chequeado, setChequeado] = React.useState(false);

    // cambiar la clase cuando cambia el checkbox
    const CheckChanged = (check) => {
        setChequeado(check);
    }

    
    // filtrado de la busqueda
    const search = useSelector((state) => state.buscador.text || "")
    const textito = search.trim().toLowerCase()
    
    const textFiltrado = textito ? data.filter((e)=>{
        const nombre = (e.nombre || "").toLowerCase()
        const descri = (e.desc || "").toLowerCase()
        return nombre.includes(textito) || descri.includes(textito)
    }) : data
    
    const eachProduct = textFiltrado.map((e) => {
        return <Productito
            id={e.id}
            nombre={e.nombre}
            imagen={e.imagen}
            precio={e.precio}
            viewmode={Chequeado}
        />
    })

    return (
        <>
            <div className="textlol">
                <h2>Conocé Nuestros Productos:</h2>
            </div>

            <div className="marco">
                <Checador checked={Chequeado} onChange={CheckChanged} />

                <div
                    className={`${Chequeado ? "grillaRow" : "grilla"}`}
                    style={Chequeado ? { "--num-rows": data.length } : {}}>

                    {/* .map para que cree un producto por cada item que detecte en el json*/}
                    {eachProduct}
                </div>
            </div>

        </>
    )
}