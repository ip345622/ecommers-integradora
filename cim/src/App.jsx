import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'

import Inicio from './page/start'
import Products from './page/products'
import Us from './page/us'
import Recipes from './page/recipes'
import Courses from './page/courses'
import Further from './page/further'

import Navbar from './components/navbar'
// import Footer from './components/footer'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Inicio /> },
    { path: '/proyectos', element: <Products /> },
    { path: '/nosotros', element: <Us /> },
    { path: '/contactanos', element: <Recipes /> },
    { path: '/contactanos', element: <Courses /> },
    { path: '/contactanos', element: <Further /> }
  ])

  return routes
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />

      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
