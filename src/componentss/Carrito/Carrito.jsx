import "./Carrito.css"
import EachItem from "./EachProdCart"
import { useDispatch, useSelector } from "react-redux"
import { vaciarLista } from "../../Redux/slices/Carrito"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function () {
    // functions redux
    const dispatch = useDispatch()

    const vaciado = () => dispatch(vaciarLista())

    const productLista = useSelector((state) => state.cartShop.listaItem)

    const Total = productLista.reduce((sum, item) => sum + item.precio * item.cantidad, 0)
    const cantItems = productLista.reduce((sum, item) => sum + item.cantidad, 0)


    const cadaItem = productLista.map((e) => {
        return <EachItem
            id={e.id}
            name={e.nombre}
            image={e.imagen}
            quantity={e.cantidad} />
    })

    return (
        <>
            <div className="textlol">
                <h2>Carrito con tus Productos:</h2>
            </div>

            <div className="carrito">
                <div className="carritoUno">
                    {productLista.length === 0 ? (<h2 className="Vacio"> El Carrito esta Vacio! </h2>) :
                        (
                            <>
                                <div className="carritoUnoSub" onClick={vaciado}>
                                    <CloseRoundedIcon />
                                </div>
                                {cadaItem}
                            </>
                        )}
                </div>

                <div className="carritoDos">
                    <h2 className="Vacio textCar2">Resumen:</h2>
                    
                    <div className="resumeCart">
                        <h2>{cantItems} Productos</h2>
                        <h3>${Total}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}