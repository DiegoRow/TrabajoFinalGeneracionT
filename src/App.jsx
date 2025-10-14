import './App.css'
import NavBar from './componentss/NavBar/NavBar'
import Grilla from './componentss/ProductosLista/Grilla'
import SelectProduct from "./componentss/ProdSelected/SelectProduct.jsx"
import Carrito from "./componentss/Carrito/Carrito.jsx"
import Login from './componentss/Login/Login.jsx'
import NotFound from './componentss/NotFoundPage/NotFound.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Default */}
        <Route path='/' element={
          [
            <Grilla />
          ]
        } />

        {/* SubSeccion */}
        <Route path='/producto/:id' element={
          [
            <SelectProduct />
          ]
        } />

        {/* Carrito */}
        <Route path='/carrito' element={
          [
            <Carrito />
          ]
        } />
        {/* login, (decorativo, no creo hacerlo :v) */}
        <Route path='/login' element={
          [
            <Login />
          ]
        } />
        {/* pagina que redirige a la main, el profe explico como hacerlo */}
        <Route path='*' element={
          [
            <NotFound />
          ]
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
