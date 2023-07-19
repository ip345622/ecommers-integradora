import { NavLink } from 'react-router-dom'
import logo from '../../assets/icon/logo-cim.png'
  const Navbar = ({ toggleCarrito }) => {
    const activeStyle = 'underline underline-offset-4'

    return (
      <div className='w-full'>
        <nav className='flex justify-center items-center z-10 text-lg border-b-4 font-light max-h-28'>
          <ul className='flex items-center justify-center gap-20 font-medium ml-72'>
            <li className='text-lg font-medium'>
              <div className=''>
              <NavLink to='/'>
                Inicio
              </NavLink>
              </div>
            </li>
            <li className=''>
              <div>
              <NavLink
                to='/nosotros'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Nosotros
              </NavLink>
              </div>
            </li>
            <li>
              <div>
              <NavLink
                to='/productos'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                Productos
              </NavLink>
              </div>
            </li>
            <li>
              <div>
              <NavLink
                to='/'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                <img src={logo} alt="" />
              </NavLink>
              </div>
            </li>
            <li>
              <div>
              <NavLink
                to='/recetas'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                  Recetas
              </NavLink>
              </div>
            </li>
            <li>
              <div>
              <NavLink
                to='/ubicaciones'
                className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }>
                  Ubicaciones
              </NavLink>
              </div>
            </li>

            <li>
              
            </li>
          </ul>
          <div className='flex ml-36 gap-20'>
            <div>
              <NavLink
                  to = '/inicioSesion'
                  className={({ isActive }) =>
                  isActive ? activeStyle : undefined
                }
              >
              <a href="#"><box-icon name='user' size='lg' animation='flashing-hover'></box-icon></a>
              </NavLink>
            </div>
            <div onClick={toggleCarrito}>
              {/* Icono de carrito */}
              <a href="#"><box-icon name='cart' size='lg'></box-icon></a>
              {/* <img src={shoppingCart} alt="" className='cursor-pointer'/> */}
            </div>
          </div>
        </nav>
      </div>
    )
  }

export default Navbar