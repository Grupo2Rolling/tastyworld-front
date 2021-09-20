import React from "react";
let lista = [];

const CardMenu = ({ menus }) => {
  const agregarACarrito = (id) => {
    lista.push(id);
    console.log(lista);
    localStorage.setItem("carrito", JSON.stringify(lista));
  };

  return (
    <>
      <div className="row  row-cols-md-3 row-cols-lg-4 g-4">
        {menus.map((menu) => (
          <div className="col mt-2 mb-4 d-flex justify-content-center " key={menu._id}>
            <div className=" wrapper">
              <div className="card front-face">
                <img
                  src={menu.img}
                  className="card-img-top"
                  alt={menu.nombre}
                />
                <div className="card-body">
                  <h5 className="card-title nombrePlato">{menu.nombre}</h5>

                  <strong>{menu.categoria}</strong>
                  <div className="precioyBot">
                    <h5 className="precioPlato text-center">${menu.precio}</h5>
                    <button
                      className="btn btn-info botonAgr"
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
                    className="btn btn-info botonAgrBa"
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
