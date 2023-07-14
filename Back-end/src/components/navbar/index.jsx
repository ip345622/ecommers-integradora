// eslint-disable-next-line no-unused-vars
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-screen w-[10%] bg-orange-600 navbar navbar-expand-lg navbar-dark bg-dark fixed">
      <nav className="flex flex-col z-10 text-lg font-light ml-2 p-9">
        <ul className="flex flex-col gap-20 font-medium">
          <li className="text-lg font-medium">
            <div>
              <NavLink to="/">Dashboard</NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink to="/editar"> Editar</NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink
                to="/eliminar"
              >
                Eliminar
              </NavLink>
            </div>
          </li>
          <li>
            <div>
              <NavLink
                to="/registrarse"
                className={({ isActive }) =>
                  // eslint-disable-next-line no-undef
                  isActive ? activeStyle : undefined
                }
              >
                Registrarse
              </NavLink>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
