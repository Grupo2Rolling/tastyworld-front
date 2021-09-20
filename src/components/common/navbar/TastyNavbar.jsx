import { React, useEffect, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import logo from "../../../assets/images/logo-blanco.png";
import "./navbar.css";

export const TastyNavbar = () => {
  const [interruptor, setInterruptor] = useState(false);
  const [render, setRender] = useState(true);
  const history = useHistory();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('auth')) && JSON.parse(localStorage.getItem('auth')).usuario

  const handleLogOut= () => {
    setRender(false)
    localStorage.removeItem('auth')
    history.push('/login')
  }

  useEffect(() => {
    setRender(true)
  }, [location.pathname])


  const links = [
    {
      ruta: "/login",
      nombre: "Cerrar sesión",
      show: !user ? false : true,
      function: () => handleLogOut()
    },
    {
      ruta: "/login",
      nombre: "Login",
      show: user ? false : true
    },

    {
      ruta: "/",
      nombre: "Inicio",
      show: !user ? false : true,
    },
    {
      ruta:'/cocina',
      nombre:'Cocina',
      show: !user ? false : (user.rol === 'ADMIN_ROLE' || user.rol === 'CHEF_ROLE') ? true : false
    },
    {
      ruta:'/barra',
      nombre:'Barra',
      show: !user ? false : (user.rol === 'ADMIN_ROLE' || user.rol === 'WAITER_ROLE') ? true : false
    },    {
      ruta: "/mozo",
      nombre: "Mozo",
      show: !user ? false : (user.rol === 'ADMIN_ROLE' || user.rol === 'WAITER_ROLE') ? true : false
    },
    {
      ruta:'/entregas',
      nombre: 'Entregas',
      show: !user ? false : (user.rol === 'ADMIN_ROLE' || user.rol === 'WAITER_ROLE') ? true : false
    },
    {
      ruta:'/administracion',
      nombre:'Administración',
      show: !user ? false : (user.rol === 'ADMIN_ROLE') ? true : false
    }
  ]

  return (
    <div className="navBG">
      {/* <nav className={`justify-content-between container navB`}>
        <div className="d-flex align-items-center">
          {render && links.map((link, index) => (
            <NavLink
              onClick={link.function && link.function}
              key={index + 3206}
              exact
              to={link.ruta}
              className={`nav-link link ${!link.show && 'd-none'}`}
            >
              {link.nombre}
            </NavLink>
          ))}
        </div>
      </nav> */}
     
      <nav onBlur={() => setInterruptor(false)} className={`sidebar ${interruptor ? "" : "cerrado"}`}>
        {/* <button
          onClick={() => setInterruptor(!interruptor)}
          className={`btn d-flex w-100 justify-content-end ${
            interruptor ? "toggle" : "toggle-cerrado"
          }`}
        >
          X
        </button> */}
      <button onClick={() => setInterruptor(!interruptor)} class={`hamburger hamburger--slider ${interruptor ? 'is-active toggle' : '  toggle-cerrado'}`} type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button> 
        <div className='py-3'>
          {links.map((link, index) => (
            <NavLink
              key={index + 78789}
              exact
              to={link.ruta}
              onClick={link.function && link.function}
              className={`nav-link link ${!link.show && 'd-none'}`}
            >
              {link.nombre}
            </NavLink>
          ))}
        </div>
      </nav>
      <NavLink exact to="/" className="marca-nav">
        <img src={logo} alt="" className="w-100" />
      </NavLink>
    </div>
  );
};
