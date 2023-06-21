import { NavLink } from 'react-router-dom'
// import {logo} from '../../assets/icon/logo-cim'

const Navbar = () => {
  const activeStyle = 'underline underline-offset-4'

  return (
    <nav className='flex justify-between items-center z-10 w-full py-5 px-8 text-sm font-light '>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <div>
          <NavLink to='/'>
            Home
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/us'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            us
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/products'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            products
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
            {/* <img src={logo} alt="" /> */}
          </NavLink>
          </div>
        </li>
        <li>
          <div>
          <NavLink
            to='/contactanos'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
            contactanos
          </NavLink>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar