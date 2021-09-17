import React, { useState, useEffect } from "react";

import { ChevronDown, Plus, MoreVertical, Edit, Trash } from "react-feather";
import { Modal, Button, Form } from "react-bootstrap";

import { postProducto,getProducto,putProducto,deleteProducto, getProductos } from "../helpers/productos";


const ModalProductos = (props) => {
    const [pais, setPais] = useState("");
    const [continente, setContinente] = useState("");
    const [products, setProducts] = useState({ datos: [], loading: true });
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setImagen] = useState("");
    const [precio, setPrecio] = useState(0);
    const [pagina, setPagina] = useState(0);
    const [show, setShow] = useState(false);
    const [totPag, setTotpag] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const producto = {
        nombre,
        tipo,
        pais,
        continente,
        img,
        precio,
        descripcion
        
      };
      console.log(producto);
      postProducto(producto).then((respuesta) => {
        if (respuesta.errors) {
            
            return window.alert(respuesta.errors[0].msg);
          }
          if (respuesta.msg) {
            window.alert(respuesta.msg);
          }
        //   setLoading(false);
        //   setFormValue({
        //     nombre: "",
        //     precio: "",
        //     descripcion: "",
        //     categoria: "",
        //     disponible: true,
        //   });
        //   handleClose();

    })}

  


    useEffect(() => {
      getProductos().then((respuesta) => {
        setProducts({
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
        setProducts({
          datos: respuesta.productos,
          loading: false,
        });
      });
    };
    const deleteMenu = (uid) => {
        let producto = products.datos.find((producto) => {
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
                onBlur={(e) => setNombre(e.target.value)}
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Descripcion del producto</Form.Label>
              <Form.Control
                onBlur={(e) => setDescripcion(e.target.value)}
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
              <Form.Control onBlur={(e) => setImagen(e.target.value)} type="text" />
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                onBlur={(e) => setPrecio(e.target.value)}
                type="number"
              />
            </Form.Group>
    
            <Button variant="primary" type="submit" >
              Agregar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
 }

  export default ModalProductos;