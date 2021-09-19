import React from "react";
import { mesasDelete, mesasPut } from "../helpers/mesas";

const TablaComandas = ({ mesasOcup }) => {
  const pedidoEntregado = (id) => {};

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
    <div className="col-11 col-lg-5 mx-auto login-card table-wrapper-scroll-y my-custom-scrollbar">
      <div className="col-12">
        <h5 className="iniciaSesion">MESAS OCUPADAS</h5>
        <table className="table">
          <thead>
            <tr className="text-white mt-2">
              <th scope="col">N° mesa</th>
              <th scope="col">Pedido</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>
          <tbody>
            {mesasOcup.map((mesa) => (
              <tr className="text-white" key={mesa.id}>
                <td>{mesa.numero}</td>
                <td>
                  {/* <button
                    disabled={btnDisable}
                    className="btn btn-warning"
                    onClick={() => pedidoEntregado(mesa.id)}
                  >
                    {botoncito}
                  </button> */}
                </td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => liberarMesa(mesa.id)}
                  >
                    Liberar
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
