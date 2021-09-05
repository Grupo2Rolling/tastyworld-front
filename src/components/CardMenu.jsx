import React from "react";

const CardMenu = ({ menus }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {menus.map((menu) => (
          <div className="col" key={menu.id}>
            <div className="card h-100">
              <img
                src={menu.img}
                className="card-img-top"
                alt={menu.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{menu.nombre}</h5>
                <strong>{menu.categoria}</strong>
                
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardMenu;
