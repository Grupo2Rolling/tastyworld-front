import React from 'react'
import logo from '../../../assets/images/tastyworld-logo.png'


export const TastyFooter = () => {
    return (
        <div>
            <footer>
      <div className="container">
        <div className="row text-center mt-2">
          <div className="col-12 col-md-4 mb-2 pb-4 mx-auto">
            <img src={logo} className="marca" alt="logo footer" />
          </div>
          <div
            class="col-12 col-md-4 mb-4 mb-md-2 d-flex align-items-center justify-content-center"
          >
            <a href="error404.html"
              ><i className="mx-2" aria-hidden="true">F</i
            ></a>
            <a href="error404.html"
              ><i className="mx-2" aria-hidden="true">I</i
            ></a>
            <a href="error404.html"
              ><i className="mx-2" aria-hidden="true">T</i
            ></a>
          </div>
          <div
            class="col-12 col-md-4 mb-4 mb-md-2 d-flex align-items-center justify-content-center"
          >
            <span
              >+543815673097 <br />
              Tucumán, Argentina <br />
              tastyworld@gmail.com</span
            >
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p className="small">&copy; TastyWorld 2021. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
        </div>
    )
}