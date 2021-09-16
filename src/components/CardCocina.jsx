import React from 'react';

const CardCocina = ({ comandas }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {comandas.map((comanda) => (
          <div className="col" key={comanda._id}>
            <div className="card h-100">
              <img
                src="../assets/images/tastyworld-logo.png"
                className="card-img-top"
                alt={comanda.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{comanda.producto}</h5>
                <h6>{comanda.cantidad}</h6>
                <strong>{comanda.tipo}</strong>
                <strong>{comanda.mesa}</strong>
                <strong>{comanda.nombreCliente}</strong>
                <p className="card-text">{comanda.descripcion}</p>
              </div>
              <div className="card-footer ">
                {comanda.estado ? (
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-disponible">En proceso</span>
                    <button className="btn btn-success">Realizado</button>
                  </div>
                ) : (
                  <span className="text-nodisponible">Realizado</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CardCocina