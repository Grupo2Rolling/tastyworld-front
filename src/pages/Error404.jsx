import React from "react";

const Error = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="row">
          <div className="col mt-5 mb-1 iniciaSesion">
            <h1>ERROR 404!!</h1>
          </div>
        </div>
        <div className="row text-center font-weight-bold">
          <div className="col-12 col-lg-8 offset-lg-2 mt-5 mb-1">
            <p>
              Lo lamentamos, la pagina solicitada se encuentra en mantenimiento
              para un mejor funcionamiento
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-12 col-lg-6 offset-lg-6 my-5">
            <p className="text-white">
              Regresar al{" "}
              <a href="./">
                <button type="button" class="btn btnHome btn-lg">
                  HOME
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
