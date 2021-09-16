import React, { useState } from "react";
import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import { ChevronDown, Plus, MoreVertical, Edit, Trash } from "react-feather";
import { Modal, Button, Form } from "react-bootstrap";
import { productosGet, deleteMenu } from "../helpers/menus";

const URL = "https://tasty-world-backend.herokuapp.com";
const ModalProductos = (props) => {
  const [pais, setPais] = useState("");
  const [continente, setContinente] = useState("");
  const [nombre, setNombreProducto] = useState({ datos: [], loading: true });
  const [tipo, setTipo] = useState("");
  const [img, setImagen] = useState("");
  const [precio, setPrecio] = useState(0);
  const [pagina, setPagina] = useState(0);
  const [show, setShow] = useState(false);
  const [totPag, setTotpag] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const producto = {
      nombre,
      pais,
      continente,
      img,
      precio,
      tipo,
      estado: true,
    };

    useEffect(() => {
      productosGet().then((respuesta) => {
        setNombreProducto({
          datos: respuesta.productos,
          loading: false,
        });
        setTotpag(respuesta.Total);
      });
    }, []);

    useEffect(() => {
      updateDatos(pagina);
    }, [pagina, show]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateDatos = (pag) => {
      getProductos(pag).then((respuesta) => {
        setProductos({
          datos: respuesta.productos,
          loading: false,
        });
      });
    };

// -------------------------------------

    const borrarProducto = (uid) => {
      let produc = productos.datos.find((producto) => {
        return producto._id === uid;
      });
  
      let validar = window.confirm(
        `Esta seguro que quiere inactivar el producto ${producto.nombre}?`
      );
      if (validar) {
        deleteMenu(uid).then((respuesta) => {
          if (respuesta.msg) {
            window.alert(respuesta.msg);
          }
          updateDatos(pagina);
        });
      }
    };

    // fetch(`${URL}/productos/x-token/${token}`, {
    //   method: 'POST',
    //   headers: {
    //     "ContentType": "application/json",
    //     // "Authorization": `x-token/${token}`

    //   },
    //   body : JSON.stringify(producto)
    // })
    // .then(res => res.json())
    // .then(res => {
    //   console.log('respuesta', res)
    // })
  };
  console.log("URL", URL);
  console.log("tttt", token);

  const paises = [
    "Argentina",
    "Peru",
    "Colombia",
    "Brasil",
    "Venezuela",
    "Ecuador",
  ];

  const continentes = [
    "Europa",
    "Norteamérica",
    "Latinoamérica",
    "Oceanía",
    "Asia",
    "Africa",
  ];

  const tipos = ["Plato", "Bebida", "Promo"];
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">PRODUCTOS</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Agregue un producto</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label>País</Form.Label>
            <Form.Control onChange={(e) => setPais(e.target.value)} as="select">
              <option>Elige un país</option>
              {paises.map((pais, index) => (
                <option key={index + 4567}>{pais}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Continente</Form.Label>
            <Form.Control
              onChange={(e) => setContinente(e.target.value)}
              as="select"
            >
              <option>Elige un continente</option>
              {continentes.map((continente, index) => (
                <option key={index + 12839}>{continente}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              onBlur={(e) => setNombreProducto(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tipo</Form.Label>
            <Form.Control onChange={(e) => setTipo(e.target.value)} as="select">
              <option>Elige un tipo de producto</option>
              {tipos.map((tipo, index) => (
                <option key={index + 12679}>{tipo}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              onBlur={(e) => setImagen(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              onBlur={(e) => setPrecio(e.target.value)}
              type="number"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
const ModalUsuarios = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>USUARIOS</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
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
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
              Launch vertically centered modal
            </Button> */}

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
