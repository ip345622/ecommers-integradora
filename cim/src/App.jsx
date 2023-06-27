import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Inicio from './page/inicio'
import Productos from './page/productos'
import Nosotros from './page/nosotros'
import Recetas from './page/recetas'
import Ubicaciones from './page/ubicaciones'
import Mas from './page/mas'

import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Inicio /> },
    { path: '/productos', element: <Productos /> },
    { path: '/nosotros', element: <Nosotros /> },
    { path: '/recetas', element: <Recetas /> },
    { path: '/ubicaciones', element: <Ubicaciones /> },
    { path: '/mas', element: <Mas /> }
  ])

  return routes
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
