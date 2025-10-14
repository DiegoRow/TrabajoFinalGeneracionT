import { Link, useParams } from "react-router-dom"
import data from "/src/JsonDB/productListTest.json"
import "./SelectProduct.css"

import { useDispatch } from "react-redux"
import { agregarItem, vaciarLista } from "../../Redux/slices/Carrito"

import { useEffect } from "react"

export default function SelectProduct() {
    const { id } = useParams()
    const papuducto = data.find(p => p.id === Number(id))

    // chequea si el id coincide con alguno del array, sino tira error
    if (!papuducto) {
        return (
            <div className="errorcito">
                <h2>No hay ningun Producto con ese ID</h2>
                <h2>Vuelve a la página principal</h2>
            </div>
        )
    }

    const defaultImage = (e) => {
        e.target.src = "/imgProducts/sin-imagen.jpg"
    }

    
    const dispatch = useDispatch()
    
    // useEffect para la descripcion del producto
    useEffect(() => {
        const saltoTexto = papuducto.desc.replace(/\n/g, "<br />")
        const descElement = document.getElementById("descripcion")

        if (descElement){
            descElement.innerHTML = saltoTexto
        }
    }, [papuducto.desc])


    
    return (
        <>
            <div className="selectDiv">
                <img className="imgSelect" src={papuducto.imagen} alt={papuducto.nombre} onError={defaultImage} />

                <div className="subInfo">
                    <h2 className="titleProd">{papuducto.nombre}</h2>
                    <h2 className="priceProd">${papuducto.precio} </h2>
                    <h3 className="subtitleProd">Envio Gratis :3</h3>


                    <Link to="/carrito" className="botoncitocarritogod2" onClick={() => {
                        dispatch(vaciarLista())
                        dispatch(agregarItem(papuducto))
                    }}>
                        Comprar :3
                    </Link>

                    <button className="botoncitocarritogod" onClick={() => dispatch(agregarItem(papuducto))}>
                        Agregar al Carrito
                    </button>

                </div>
                <div className="descProd">
                    <h1>Especificaciones</h1>
                    {/* codigo para que la descripcion pueda usar saltos de linea */}
                    <h3 id="descripcion"></h3>
                </div>

            </div>
        </>
    )
}