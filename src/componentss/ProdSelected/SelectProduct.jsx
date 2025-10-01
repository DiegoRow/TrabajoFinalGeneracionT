import { useParams } from "react-router-dom"
import data from "/src/JsonDB/productListTest.json"
import "./SelectProduct.css"



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

    return (
        <div>
            <p>Nombre del Producto es {papuducto.nombre}</p>
            <p>con descripcion: {papuducto.desc}</p>
            <img src={papuducto.imagen} alt={papuducto.nombre} onError={defaultImage} />
            <p>precio: {papuducto.precio} </p>
        </div>
    )
}