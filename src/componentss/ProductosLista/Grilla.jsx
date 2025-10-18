import * as React from 'react';
import "./css/Productos.css"
import "./css/ProductosPhone.css"
import Productito from "./Product.jsx"
import Checador from "./CheckBoxChanger/CustomCheckbox.jsx"
import useProductos from './useProductos.js';
import { useDispatch, useSelector } from 'react-redux';
import { limpiarTexto } from '../../Redux/slices/Buscador.js';

import { useLocation } from 'react-router-dom';



export default function Grilla() {
    // al volver al main se limpia lo que halla en el buscador siempre y cuando se vuelva por el logo y no la busqueda
    const dispatch = useDispatch()
    const location = useLocation()

    React.useEffect(() => {
        if (!location.state?.fueBusqueda) {
            dispatch(limpiarTexto())
        }
    }, [dispatch, location.state]);

    // const para obtener el json del excel
    const { productos, loading, error } = useProductos();
    // const de checado para el checkbox
    const [Chequeado, setChequeado] = React.useState(false);

    // cambiar la clase cuando cambia el checkbox
    const CheckChanged = (check) => {
        setChequeado(check);
    }

    // filtrado de la busqueda
    const search = useSelector((state) => state.buscador.text || "")
    const textito = search.trim().toLowerCase()

    const textFiltrado = textito ? productos.filter((e) => {
        const nombre = (e.nombre || "").toLowerCase()
        return nombre.includes(textito)
    }) : productos


    if (loading) return <h2 className="errorcito" >Cargando productos...</h2>;
    if (error) return <h2 className="errorcito">{error}</h2>;



    const eachProduct = textFiltrado.map((e) => {
        return <Productito
            key={e.id}
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
                    style={Chequeado ? { "--num-rows": productos.length } : {}}>

                    {/* .map para que cree un producto por cada item que detecte en el json*/}
                    {eachProduct}
                </div>
            </div>

        </>
    )
}