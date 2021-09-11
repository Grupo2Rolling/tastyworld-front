import React from "react";
import { Link } from "react-router-dom";
const CardCategoria = ({ listaCategorias }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {listaCategorias.map((categoria) => (
          <Link to={`menu/${categoria.nombre}`}>
              <div className="col" key={categoria.id}>
                <div className="card h-100">
                  <img
                    src={categoria.img}
                    className="card-img-top"
                    alt={categoria.nombre}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{categoria.nombre}</h5>
                  </div>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CardCategoria;
