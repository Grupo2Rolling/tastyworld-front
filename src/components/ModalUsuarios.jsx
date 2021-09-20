import React, { useState, useEffect } from "react";

// import { ChevronDown, Plus, MoreVertical, Edit, Trash } from "react-feather";
import { Modal, Button, Form } from "react-bootstrap";

import { usuarioPost, usuarioGet, usuarioPut, usuarioDelete, usuariosGet } from "../helpers/usuarios";


const ModalUsuarios = (props) => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [img, setImg] = useState("");
    const [rol, setRol] = useState("");

    

    const handleSubmit = (e) => {
      e.preventDefault();
      const usuario = {
        nombre,
        email,
        password,
        img,
        rol,
        // estado,
        
      };
      if (props.usuarioEditar){
        usuarioPut(props.usuarioEditar.uid, usuario).then((respuesta) => {
          if (respuesta.errors) {
            return window.alert(respuesta.errors[0].msg);
          }
          if (respuesta.msg) {
              props.onHide()
              props.setRender()
              window.alert(respuesta.msg);
            }
          })
        } else {
          usuarioPost(usuario).then((respuesta) => {
            if (respuesta.errors) {
              return window.alert(respuesta.errors[0].msg);
            }
            if (respuesta.msg) {
              props.onHide()
              props.setRender()
              window.alert(respuesta.msg);
          }
        })
      }
 }

  


    useEffect(() => {
      const obj = props.usuarioEditar
        setNombre(obj ? obj.nombre : '')
        setEmail(obj ? obj.email : '')
        setPassword(obj ? obj.password : '')
        setImg(obj ? obj.img : '')
        setRol(obj ? obj.rol : '')
        // setEstado(obj ? obj.estado : '')
    }, [props.usuarioEditar]);

    
    const roles = [
      "USER_ROLE",
      "ADMIN_ROLE",
      "WAITER_ROLE",
      "CHEF_ROLE"
    ];

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">USUARIOS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Administre los usuarios</h4>
          <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                onChange={(e) => setNombre(e.target.value)}
                value={nombre}
                type="text"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
              />

            </Form.Group>
            <Form.Group className={`mb-3 ${props.usuarioEditar && 'd-none'}`}>
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </Form.Group>

            <Form.Group className={`mb-3 ${props.usuarioEditar && 'd-none'}`}>
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                value={img}
                onChange={(e) => setImg(e.target.value)}
                type="text"
              />
            </Form.Group>
    
            <Form.Group className="mb-3">
              <Form.Label>Rol</Form.Label>
              <Form.Control
                onChange={(e) => setRol(e.target.value)}
                value={rol}
                as="select"
              >
                <option>Elige el rol</option>
                {roles.map((rol, index) => (
                  <option key={index + 52737}>{rol}</option>
                ))}
              </Form.Control>
            </Form.Group>
    
            <Button variant="primary" type="submit" >
              {props.usuarioEditar ? 'Editar' : 'Agregar'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
 }

export default ModalUsuarios;
