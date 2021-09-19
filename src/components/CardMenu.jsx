import React,{ useState} from "react";



const CardMenu = ({ menus }) => {
  let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
  const usuario = JSON.parse(localStorage.getItem("auth")).usuario;

  const agregarACarrito = (id) => {
   let pedir= {
      usuario:usuario.nombre,
      idProducto:id
    }
    
    console.log(pedir);
    carrito.push(pedir);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {menus.map((menu) => (
          <div className="col d-flex justify-content-center" key={menu._id}>
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
                    <button
                      className="btn btn-info botonAgr d-md-none"
                      onClick={() => agregarACarrito(menu._id)}
                    >
                      Agregar +
                    </button>
                  </div>
                </div>
              </div>

              <div className="card back-face">
                <img src={menu.img} alt={menu.nombre} />
                <div className="info">
                  <div className="title">
                    <h4>{menu.nombre}</h4>
                  </div>
                  <p>{menu.descripcion}</p>
                </div>
                <div className="precioyBot">
                  <h5>${menu.precio}</h5>
                  <button
                    className="btn btn-info botonAgrBa d-md-none"
                    onClick={() => agregarACarrito(menu._id)}
                  >
                    Agregar +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardMenu;
