import './App.css'
import NavBar from './componentss/NavBar/NavBar'
import Grilla from './componentss/ProductosLista/Grilla'
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
        <Route path='/producto' element={
          [

          ]
        } />

        {/* Carrito */}
        <Route path='/carrito' element={
          [

          ]
        } />
        {/* login, (decorativo, no creo hacerlo :v) */}
        <Route path='/login' element={
          [

          ]
        } />
        {/* pagina que redirige a la main, el profe explico como hacerlo */}
        <Route path='/notFound' element={
          [

          ]
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
