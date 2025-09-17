import { Link } from "react-router-dom"
import "./Productos.css"


export default function Productito({ id, nombre, imagen, precio }){
    return(
        <Link to={"/" + nombre} className="product">
            <p>{nombre}</p>
            <img src={imagen} alt={"product-" + nombre} />
            <p>{"$" + precio}</p>
        </Link>
    )
}