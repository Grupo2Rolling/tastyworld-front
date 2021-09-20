import React, { useState } from "react";



const CardMenu = ({ menus }) => {
 
  // const agregarACarrito= (menu)=>{
  //   comanda.push(menu);
  //   localStorage.setItem('comanda', JSON.stringify(comanda));
  // }
 
 
  return (
    <>
       <div className="row row-cols-1 row-cols-md-3 g-4">
        {menus && menus.map((menu) => (
          <div className="col d-flex justify-content-center" key={menu.id}>
             <div className="wrapper">
               <div className="card front-face">
                 <img
                src={menu.img}
                className="card-img-top"
                alt={menu.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{menu.nombre}</h5>

                <strong>{menu.categoria}</strong>
                <div className="precioyBot">
                  <h5>${menu.precio}</h5>
                  <button className="btn btn-info botonAgr d-md-none" /*onClick={agregarACarrito(menu)} */>Agregar +</button></div>

                
              </div>
            </div>

            <div className="card back-face">
              <img src={menu.img}
                alt={menu.nombre} />
            <div className="info">
              <div className="title">
               <h4>{menu.nombre}</h4>
             </div>
             <p>{menu.descripcion}</p>
             </div>
             <div className="precioyBot">
                  <h5>${menu.precio}</h5>
                  <button className="btn btn-info botonAgrBa d-md-none" /*onClick={agregarACarrito} */>Agregar +</button></div>
                
              </div>

            </div>
          </div>
          
          

        ))}
      </div>
    </>
  )
}

export default CardMenu
