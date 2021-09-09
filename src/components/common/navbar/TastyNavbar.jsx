import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/images/logo-blanco.png'
import './navbar.css'


export const TastyNavbar = () => {

  

  const [interruptor, setInterruptor] = useState(false)
  const links=[
    {
      ruta:'/login',
      nombre:'Login'
    },
    {
      ruta:'/',
      nombre:'Inicio'
    },
    {
      ruta:'/pedidos',
      nombre:'Pedidos'
    },
    {
      ruta:'/administracion',
      nombre:'Administración'
    }
  ]

    return(
        <div className='navBG'>
          <nav className={`justify-content-between container navB`}>
            <div className="d-flex align-items-center">
              {links.map(link=>(
                    <NavLink exact to={link.ruta} className='nav-link link'>{link.nombre}</NavLink>
              ))}
            </div>
          </nav>
          <nav className={`sidebar ${interruptor?'':'cerrado'}`}>
            <button onClick={()=>setInterruptor(!interruptor)} className={`btn d-flex w-100 justify-content-end ${interruptor?'toggle':'toggle-cerrado'}` }>X</button>
            <div>
            {links.map(link=>(
              <NavLink exact to={link.ruta} className='nav-link link'>{link.nombre}</NavLink>
              ))}
            </div>
          </nav>
          <NavLink exact to='/' className='marca'><img src={logo} alt="" className="w-100" /></NavLink>
        </div>
    )
}
