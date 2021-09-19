import React, { useState, useEffect } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { postComanda, putComanda } from '../helpers/comandas'
//import { postProducto, putProducto, } from "../helpers/productos";

const ModalComanda = (props) => {
  const [producto, setProducto] = useState('')
  const [prodId, setProdId] = useState('')
  const [nombreCliente, setNombreCliente] = useState('')
  const [estado, setEstado] = useState('')
  const [tipo, setTipo] = useState('')
  const [mesa, setMesa] = useState('')
  const [numeroPedido, setNumeroPedido] = useState(0)
  const [descripcion, setDescripcion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const product = {
      producto,
      prodId,
      nombreCliente,
      estado,
      tipo,
      mesa,
      numeroPedido,
      descripcion,
    }
    if (props.comandaEditar) {
      putComanda(props.comandaEditar._id, product).then((respuesta) => {
        if (respuesta.errors) {
          return window.alert(respuesta.errors[0].msg)
        }
        if (respuesta.msg) {
          props.onHide()
          props.setRender()
          window.alert(respuesta.msg)
        }
      })
    } else {
      postComanda(product).then((respuesta) => {
        if (respuesta.errors) {
          return window.alert(respuesta.errors[0].msg)
        }
        if (respuesta.msg) {
          props.onHide()
          props.setRender()
          window.alert(respuesta.msg)
        }
      })
    }
  }

  useEffect(() => {
    const obj = props.comandaEditar
    setProducto(obj ? obj.producto : '')
    setProdId(obj ? obj.prodId : '')
    setNombreCliente(obj ? obj.nombreCliente : '')
    setEstado(obj ? obj.estado : '')
    setMesa(obj ? obj.mesa : '')
    setNumeroPedido(obj ? obj.numeroPedido : '')
    setDescripcion(obj ? obj.descripcion : '')
  }, [props.comandaEditar])

  
  const estados = [
    "Pendiente",
    "En proceso",
    "Realizado",
    "Entregado",
    "Anulado"
  ]
 

  const tipos = ['Plato', 'Bebida', 'Promo']

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">COMANDA</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Agregar producto a la comanda</h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
          
          <Form.Group className="mb-3">
            <Form.Label>Nombre de producto</Form.Label>
            <Form.Control
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>ID del producto</Form.Label>
            <Form.Control
              value={prodId}
              onChange={(e) => setProdId(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tipo</Form.Label>
            <Form.Control
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              as="select"
            >
              <option>Elige un tipo de producto</option>
              {tipos.map((tipo, index) => (
                <option key={index + 12679}>{tipo}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del Cliente</Form.Label>
            <Form.Control
              value={nombreCliente}
              onChange={(e) => setNombreCliente(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mesa</Form.Label>
            <Form.Control
              value={mesa}
              onChange={(e) => setMesa(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Numero de pedido</Form.Label>
            <Form.Control
              value={numeroPedido}
              onChange={(e) => setNumeroPedido(e.target.value)}
              type="text"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              as="select"
              >
              <option>Elige un estado</option>
              {estados.map((estado, index) => (
                <option key={index + 12679}>{estado}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción del producto</Form.Label>
            <Form.Control
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              type="text"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {props.comandaEditar ? 'Editar' : 'Agregar'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  )
}

export default ModalComanda
