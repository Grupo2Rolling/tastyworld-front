import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component"; //, { createTheme }
//import { Link } from "react-router-dom";
import { Edit, Trash } from "react-feather"; //ChevronDown, Plus, MoreVertical,
//import { Modal, Button, Form } from "react-bootstrap";
import { getProductos, deleteProducto } from "../helpers/productos";
import { usuariosGet, usuarioDelete } from "../helpers/usuarios";
import ModalUsuarios from "./ModalUsuarios";
import ModalProductos from "./ModalProductos";

const Administracion = () => {
  const [render, setRender] = useState(false);
  const [toggleProducto, setToggleProducto] = useState(false);
  const [toggleUsuarios, setToggleUsuarios] = useState(false);
  const [products, setProducts] = useState({ datos: [], loading: true });
  const [usuarios, setUsuarios] = useState({ datos: [], loading: true });
  const [productEditar, setProductEditar] = useState({});
  const [usuarioEditar, setUsuarioEditar] = useState({});

  const handleDeleteProducto = (product) => {
    deleteProducto(product._id).then((respuesta) => {
      if (respuesta.msg) {
        window.alert(respuesta.msg);
        setRender(!render);
      }
    });
  };
  const handleEditProducto = (product) => {
    setProductEditar(product);
    setToggleProducto(true);
  };

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProducts({
        datos: respuesta.producto,
        loading: false,
      });
    });
    usuariosGet().then((respuesta) => {
      setUsuarios({
        datos: respuesta.usuarios,
        loading: false,
      });
    });
  }, [render]);

  //------------------------------------------------

  const handleDeleteUsuario = (usuario) => {
    console.log(usuario);
    usuarioDelete(usuario.uid).then((respuesta) => {
      if (respuesta.msg) {
        window.alert(respuesta.msg);
        setRender(!render);
      }
    });
  };
  const handleEditUsuario = (usuario) => {
    setUsuarioEditar(usuario);
    setToggleUsuarios(true);
  };

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
            <button className="dropdown-item">
              <Edit onClick={() => handleEditProducto(row)} size={15} />
            </button>
            <button className="dropdown-item">
              <Trash onClick={() => handleDeleteProducto(row)} size={15} />
            </button>
          </div>
        );
      },
    },
  ];

  const columnasUsuarios = [
    {
      name: "NOMBRE USUARIO",
      selector: "nombre",
      sortable: true,
      width: "29%",
    },
    {
      name: "EMAIL USUARIO",
      selector: "email",
      sortable: true,
      width: "29%",
    },
    {
      name: "ROL",
      selector: "rol",
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
            <button className="dropdown-item">
              <Edit onClick={() => handleEditUsuario(row)} size={15} />
            </button>
            <button className="dropdown-item">
              <Trash onClick={() => handleDeleteUsuario(row)} size={15} />
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
          onClick={() => {
            setProductEditar(null);
            setToggleProducto(true);
          }}
          className="btn btn-light"
        >
          +
        </button>
      </div>
      <div className="rounded mx-5">
        <DataTable columns={columnasProductos} data={products.datos} />
      </div>
      <div className="d-flex align-items-center">
        <h5 className="text-white p-4">USUARIOS</h5>
        <button
          onClick={() => {
            setUsuarioEditar(null);
            setToggleUsuarios(true);
          }}
          className="btn btn-light"
        >
          +
        </button>
      </div>
      <div className="rounded mx-5">
        <DataTable columns={columnasUsuarios} data={usuarios.datos} />
      </div>

      <ModalProductos
        show={toggleProducto}
        productEditar={productEditar}
        setRender={() => setRender(!render)}
        onHide={() => setToggleProducto(false)}
      />
      <ModalUsuarios
        show={toggleUsuarios}
        usuarioEditar={usuarioEditar}
        setRender={() => setRender(!render)}
        onHide={() => setToggleUsuarios(false)}
      />
    </div>
  );
};

export default Administracion;
