import "./Productos.css"
import Productito from "./Product.jsx"
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

export default function Grilla() {
    return (
        <>
            <div className="textlol">
                <h2>Conocé Nuestros Productos:</h2>
            </div>

            <div className="grilla">
                {eachProduct}
            </div>
        </>
    )
}