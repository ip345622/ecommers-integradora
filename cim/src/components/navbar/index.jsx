import { NavLink } from 'react-router-dom'
import { logo } from '../../assets/icon/logo-cim.png'

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light '>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <div>
          <NavLink to='/'>
            Inicio
          </NavLink>
          </div>
        </li>
        <li>
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
            to='/recipes'
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
            to='/recipes'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              Recetas
          </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar