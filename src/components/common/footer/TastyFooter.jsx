import React from 'react'
import logo from '../../../assets/images/logo-blanco.png'
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillTwitterCircle } from "react-icons/ai";


export const TastyFooter = () => {
    return (
        <div>
            <footer className="footer-clase p-4">
      <div className="container">
        <div className="row text-center mt-2">
          <div className="col-12 col-md-4 col-sm-2 mb-2 pb-4 mx-auto">
            <img src={logo} className="marca" alt="logo footer" />
          </div>
          <div
            className="col-12 col-md-4 mb-4 mb-md-2 d-flex align-items-center justify-content-center"
          >
            <a href="#" className=" redes"
              ><i className="mx-2" aria-hidden="true"><IoLogoFacebook style={{ fontSize: 40 }}/></i
            ></a>
            <a href="#" className=" redes"
              ><i className="mx-2" aria-hidden="true"><AiOutlineInstagram style={{ fontSize: 40 }}/></i
            ></a>
            <a href="#" className=" redes"
              ><i className="mx-2" aria-hidden="true"><AiFillTwitterCircle style={{ fontSize: 40 }}/></i
            ></a>
          </div>
          <div
            className="col-12 col-md-4 mb-4 mb-md-2 d-flex align-items-center justify-content-center"
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