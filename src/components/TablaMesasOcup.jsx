import React, { useEffect, useState } from "react";
import { mesasDelete, mesasPut } from "../helpers/mesas";

const TablaComandas = ({ mesasOcup }) => {
  const liberarMesa = (id) => {
    let mesa = { estado: true };
    mesasPut(id, mesa).then((respuesta) => {
      console.log(respuesta.mesa.estado);
    });
  };

  const deleteMesa = (id) => {
    mesasDelete(id).then((respuesta) => {
      console.log(respuesta);
    });
  };

  return (
    <div className="col-10 col-md-8 col-lg-5 mx-auto login-card ">
      <div className="row">
        <table className="table">
          <thead>
            <tr className="text-white mt-2">
              <th scope="col">N° mesa</th>
              <th scope="col">Pedido</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {mesasOcup && mesasOcup.map((mesa) => (
              <tr className="text-white" key={mesa.id}>
                <td>{mesa.numero}</td>
                <td>
                  <button className="btn btn-warning">
                    <input
                      type="checkbox"
                      aria-label="Checkbox for following text input"
                    ></input>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => liberarMesa(mesa.id)}
                  >
                    Desocup
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

export default TablaComandas;
