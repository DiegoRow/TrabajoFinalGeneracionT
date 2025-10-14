import "./NavBar.css"
import { Link } from "react-router-dom"
import { ShoppingCart } from "@mui/icons-material"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { textoPuesto } from "../../Redux/slices/Buscador";
import { useState } from "react";

export default function NavBar() {
    const dispatch = useDispatch()
    const [BuscaTexto, setBuscaTexto] = useState("")

    const changeStoreText = (e) => {
        const value = e.target.value
        setBuscaTexto(value)
        dispatch(textoPuesto(value))
    }

    const totalDeProductos = useSelector((state) => state.cartShop.listaItem).reduce((sum, item) => sum + item.cantidad, 0)

    return (
        <div className="Navar">
            <div className="logotipo">
                <Link to="/"><img className="logotype" src="/logo.jpg" alt="logo" /></Link>
            </div>

            <div className="search">
                <input type="text" name="" id="" placeholder="Busque su Producto" value={BuscaTexto} onChange={changeStoreText} />
                <SearchIcon fontSize="large"></SearchIcon>
            </div>

            <div className="carAndLogin">
                <Link to="/login" className="centradorxd">
                    <PersonIcon className="logos"></PersonIcon>
                    <p className="logos">Iniciar Sesión</p>
                </Link>

                <Link to="/carrito">
                    <ShoppingCart className="logos" />
                    {totalDeProductos > 0 && (
                        <span className="numberOfItem">{totalDeProductos}</span>
                    )}
                </Link>
            </div>
        </div>

    )
}