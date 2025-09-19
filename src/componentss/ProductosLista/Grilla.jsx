import * as React from 'react';
import "./Productos.css"
import Productito from "./Product.jsx"
import Checador from "./CheckBoxChanger/CustomCheckbox.jsx"
import data from "./productListTest.json"


// .map para que cree un producto por cada item que detecte
const eachProduct = data.map((e) => {
    return <Productito
        key={e.id}
        nombre={e.nombre}
        imagen={e.imagen}
        precio={e.precio}
    />
})

// agarramos el grid en barras

export default function Grilla() {

    // const de checado para el checkbox
    const [Chequeado, setChequeado] = React.useState(false);

    // cambiar la clase cuando cambia el checkbox
    const CheckChanged = (check) => {
        setChequeado(check);
        console.log("el hijo cambió a", check)
    }

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
                    {eachProduct}
                </div>
            </div>

        </>
    )
}