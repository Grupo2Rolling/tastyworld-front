import React, { useState, useEffect } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import { ChevronDown, Plus, MoreVertical, Edit, Trash } from "react-feather";
import { Modal, Button, Form } from "react-bootstrap";

import ModalUsuarios from "./ModalUsuarios";
import ModalProductos from "./ModalProductos";

// const URL = "https://tasty-world-backend.herokuapp.com/api/administracion";


  // -------------------------------------

  

const Administracion = () => {
 


  const [modal, setModalShow] = useState(false);
  const [toggleProducto, setToggleProducto] = useState(false);
  const [toggleUsuarios, setToggleUsuarios] = useState(false);


  
  const datosProducto = [
    {
      nombre: "gh",
      precio: "$15",
      pais: "Amaicha del valle",
    },
    {
      nombre: "Arroz con pollo",
      precio: "$100",
      pais: "Brasil",
    },
    {
      nombre: "Bife con ensalada",
      precio: "$600",
      pais: "Tucuman",
    },
    {
      nombre: "Empanas",
      precio: "$50",
      pais: "Argentina",
    },
  ];

  const datosUsuario = [
    {
      usuario: "Pablo Giroud",
      role: "Admin",
    },
    {
      usuario: "Carina Auteri",
      role: "Usuario",
    },
    {
      usuario: "Gabriela Navarro",
      role: "Usuario",
    },
    {
      usuario: "Pablo Giroud",
      role: "Admin",
    },
  ];

  const columnasProductos = [
    {
      name: "NOMBRE",
      selector: "nombre",
      sortable: true,
      width: "29%",
    },
    {
      name: "PRECIO",
      selector: "precio",
      sortable: true,
      width: "29%",
    },
    {
      name: "PAIS",
      selector: "pais",
      sortable: true,
      width: "29%",
    },
    {
      name: "ACCIONES",
      allowOverflow: true,
      center: true,
      width: "10%",
      cell: (row) => {
        return (
          <div className="d-flex">
            <Link to={``} className="dropdown-item">
              <Edit size={15} />
            </Link>
            <button className="dropdown-item">
              <Trash size={15} />
            </button>
          </div>
        );
      },
    },
  ];

  const columnasUsuarios = [
    {
      name: "NOMBRE USUARIO",
      selector: "usuario",
      sortable: true,
      width: "29%",
    },
    {
      name: "ROL",
      selector: "role",
      sortable: true,
      width: "29%",
    },
    {
      name: "ACCIONES",
      allowOverflow: true,
      center: true,
      width: "10%",
      cell: (row) => {
        return (
          <div className="d-flex">
            <Link to={``} className="dropdown-item">
              <Edit size={15} />
            </Link>
            <button className="dropdown-item">
              <Trash size={15} />
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="bg">
      <div className="d-flex align-items-center">
        <h5 className="text-white p-4">PRODUCTOS</h5>
        <button
          onClick={() => setToggleProducto(true)}
          className="btn btn-light"
        >
          +
        </button>
      </div>
      <div className="rounded mx-5">
        <DataTable columns={columnasProductos} data={datosProducto} />
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-white p-4">USUARIOS</h5>
        <button
          onClick={() => setToggleUsuarios(true)}
          className="btn btn-light"
        >
          +
        </button>
      </div>
      <div className="rounded mx-5">
        <DataTable columns={columnasUsuarios} data={datosUsuario} />
      </div>

      <ModalProductos
        show={toggleProducto}
        onHide={() => setToggleProducto(false)}
      />
      <ModalUsuarios
        show={toggleUsuarios}
        onHide={() => setToggleUsuarios(false)}
      />
    </div>
  );
};

export default Administracion;
