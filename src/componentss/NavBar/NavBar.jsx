import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="Navar">
            <div className="logotipo">
            <Link to="/"><img className="logotype" src="/logo.jpg" alt="logo" /></Link>
            </div>

            <div className="search">
                <input type="text" name="" id="" placeholder="Busque su Producto" />
                <img src="" alt="search" />
            </div>

            <div className="carAndLogin">
                <Link to="/login"><img src="" alt="peopleIcon" /></Link>

                <Link to="/carrito"><img src="" alt="carritoIcon" /></Link>
            </div>
        </div>
        
    )
}