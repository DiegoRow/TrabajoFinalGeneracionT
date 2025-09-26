import { Link } from "react-router-dom"
import "./css/Productos.css"


export default function Productito({ id, nombre, imagen, precio, viewmode }) {
    return (
        <Link
            to={`/producto/${id}`}
            className={viewmode ? "productList" : "product"}
        >
            <p>{nombre}</p>
            <img src={imagen} alt={"product-" + id} />
            <p>{"$" + precio}</p>
        </Link>
    )
}