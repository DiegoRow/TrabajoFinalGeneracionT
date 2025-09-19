import "./NavBar.css"
import { Link } from "react-router-dom"
import { ShoppingCart } from "@mui/icons-material"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar() {
    return (
        <div className="Navar">
            <div className="logotipo">
                <Link to="/"><img className="logotype" src="/logo.jpg" alt="logo" /></Link>
            </div>

            <div className="search">
                <input type="text" name="" id="" placeholder="Busque su Producto" />
                <SearchIcon fontSize="large"></SearchIcon>
            </div>

            <div className="carAndLogin">
                <Link to="/login" className="centradorxd">
                    <PersonIcon className="logos"></PersonIcon><p className="logos">Iniciar Sesión</p>
                </Link>

                <Link to="/carrito"><ShoppingCart className="logos"></ShoppingCart></Link>
            </div>
        </div>

    )
}