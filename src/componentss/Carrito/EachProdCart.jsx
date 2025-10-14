import { useDispatch } from "react-redux"
import { quitarItem, changeCantidad } from "../../Redux/slices/Carrito"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link } from "react-router-dom"



export default function EachItem({ id, name, image, quantity }) {
    const dispatch = useDispatch()

    const defaultImage = (e) => {
        e.target.src = "/imgProducts/sin-imagen.jpg"
    }

    return (
        <div className="CartItem">
            <Link to={`/Producto/${id}`}>
                <img className="linkImg" src={image} alt="" onError={defaultImage} />
            </Link>

            <p className="textitolol">{name}</p>

            <div className="cositoPaCantidad">
                <div className="botonStyle" onClick={() => dispatch(changeCantidad({ id: id, cantidad: quantity + 1 }))}>
                    <AddIcon fontSize="large" />
                </div>

                <h2>{quantity}</h2>

                <div className="botonStyle" onClick={() => dispatch(changeCantidad({ id: id, cantidad: quantity - 1 }))}>
                    <RemoveIcon fontSize="large" />
                </div>
            </div>

            <div className="botonStyle perupe" onClick={() => dispatch(quitarItem(id))} >
                <CloseRoundedIcon fontSize="large" />
            </div>
        </div>
    )
}
