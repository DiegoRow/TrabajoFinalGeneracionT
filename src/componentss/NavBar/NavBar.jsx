import "./NavBar.css"
import * as React from 'react';
import { Link, useNavigate } from "react-router-dom"
import { ShoppingCart } from "@mui/icons-material"
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { textoPuesto } from "../../Redux/slices/Buscador";

export default function NavBar() {
    const dispatch = useDispatch()
    const BuscaTexto = useSelector((state) => state.buscador.text)

    const changeStoreText = (e) => {
        dispatch(textoPuesto(e.target.value))
    }

    const totalDeProductos = useSelector((state) => state.cartShop.listaItem).reduce((sum, item) => sum + item.cantidad, 0)

    // al darle enter o click a la lupa te lleve al main tambien
    const palMain = useNavigate()
    const enterBuscar = (e) => {
        if (e.key === "Enter") {
            e.preventDefault()
            palMain("/", { state: { fueBusqueda: true } })
        }
    }
    const clickBusqueda = () => {
        palMain("/", { state: { fueBusqueda: true } })
    }

    // cmabia el iniciar sesion
    const NameUser = useSelector((state) => state.NombreUsuario.text)

    return (
        <div className="Navar">
            <div className="logotipo">
                <Link to="/"><img className="logotype" src="/logo.jpg" alt="logo" /></Link>
            </div>

            <div className="search">
                <input
                    className="inputSearch"
                    type="text"
                    placeholder="Busque su Producto"
                    value={BuscaTexto}
                    onChange={changeStoreText}
                    onKeyDown={enterBuscar} />
                <SearchIcon
                    className="logos clickHover"
                    fontSize="large"
                    onClick={clickBusqueda}
                ></SearchIcon>
            </div>

            <div className="carAndLogin">
                <Link to="/login" className="centradorxd">
                    <PersonIcon className="logos"></PersonIcon>
                    <p className="logos sesionName">{NameUser}</p>
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