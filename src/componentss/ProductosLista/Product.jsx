import { Link } from "react-router-dom"
import "./css/Productos.css"
import "./css/ProductosPhone.css"


export default function Productito({ id, nombre, imagen="/imgProducts/sin-imagen.jpg", precio, viewmode }) {

    const defaultImage = (e) => {
        e.target.src = "/imgProducts/sin-imagen.jpg"
    }

    return (
        <Link
            to={`/producto/${id}`}
            className={viewmode ? "productList" : "product"}
        >
            <p>{nombre}</p>
            <img src={imagen} alt={"product-" + id} onError={defaultImage} />
            <p>{"$" + precio}</p>
        </Link>
    )
}