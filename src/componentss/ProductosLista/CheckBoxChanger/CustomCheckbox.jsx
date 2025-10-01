import "../css/Productos.css"
import "../css/ProductosPhone.css"
import Checkbox from '@mui/material/Checkbox';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';

export default function Checador({ checked, onChange}) {



    const Change = (e) => {
        onChange(e.target.checked);
    };

    return (
        <div className='cuadroORow'>
            <Checkbox
                id="checobox"
                checked={checked}
                onChange={Change}
                icon={<GridViewIcon fontSize='large' />}
                checkedIcon={<ViewListIcon fontSize='large' />}
            />
            <p>Click para Cambiar de Vista</p>
        </div>
    )
}