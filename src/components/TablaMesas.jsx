import React from "react";
import { mesasDelete, mesasPut } from "../helpers/mesas";

const TablaMesas = ({ mesas }) => {
  const ocuparMesa = (id) => {
    let mesa = { estado: false };
    mesasPut(id, mesa).then((respuesta) => {});
  };

  const deleteMesa = (id) => {
    mesasDelete(id);
  };

  return (
    <div className="col-10 col-md-8 col-lg-5 mx-auto login-card ">
      <div className="row">
        <table className="table">
          <thead>
            <tr className="text-white mt-2">
              <th scope="col-6">N° mesa</th>
              <th scope="col-6">Estado</th>
            </tr>
          </thead>
          <tbody>
            {mesas &&
              mesas.map((mesa) => (
                <tr className="text-white" key={mesa.id}>
                  <td>{mesa.numero}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => ocuparMesa(mesa.id)}
                    >
                      Ocupar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteMesa(mesa.id)}
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaMesas;
