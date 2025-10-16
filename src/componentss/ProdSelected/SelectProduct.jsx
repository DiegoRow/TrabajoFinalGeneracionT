import { Link, useParams } from "react-router-dom";
import useProductos from "../ProductosLista/useProductos";
import "./SelectProduct.css";
import { useDispatch } from "react-redux";
import { agregarItem, vaciarLista } from "../../Redux/slices/Carrito";
import { useEffect, useState } from "react";



export default function SelectProduct() {
    const { id } = useParams();
    const { productos, loading, error } = useProductos();

    const dispatch = useDispatch();

    const [papuducto, setPapuducto] = useState(null);

    // useEffect para actualizar el producto qe llega
    useEffect(() => {
        if (productos && productos.length > 0) {
            const prod = productos.find((p) => String(p.id).trim() === String(id).trim());
            setPapuducto(prod || null);
        }
    }, [productos, id]);

    //useEffect para la descripción
    useEffect(() => {
        if (papuducto && papuducto.desc) {
            // reemplaza \n por <br>
            const saltoTexto = papuducto.desc
                .replace(/\\n/g, "<br />")
                .replace(/\n/g, "<br />");

            const descElement = document.getElementById("descripcion");
            if (descElement) descElement.innerHTML = saltoTexto;
        }
    }, [papuducto]);

    if (loading) return <h2 className="errorcito">Cargando producto...</h2>;
    if (error) return <h2 className="errorcito">{error}</h2>;

    if (!papuducto)
        return (
            <div className="errorcito">
                <h2>No hay ningún producto con ese ID</h2>
                <h2>Vuelve a la página principal</h2>
            </div>
        );

    const defaultImage = (e) => {
        e.target.src = "/imgProducts/sin-imagen.jpg";
    };


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