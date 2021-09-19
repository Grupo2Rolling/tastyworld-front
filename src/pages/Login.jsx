import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAuth } from "../helpers/autetication";
import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const isMounted = useRef(true);
  const history = useHistory();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  const [btnDisable, setBtnDisable] = useState(false);
  const [login, setLogin] = useState({});

  useEffect(() => {
    if (login.token) {
      localStorage.setItem("auth", JSON.stringify(login));
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  }, [login, history]);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  const handleChange = ({ target }) => {
    setFormValue({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formValue;
    if (email && password) {
      setBtnDisable(true);
      if (isMounted.current) {
        postAuth(formValue).then((respuesta) => {
          setLogin(respuesta);
          setBtnDisable(false);
          setFormValue({
            email: "",
            password: "",
          });
        });
      }
    }
  };

  return (
    <Container fluid className="login-bg py-4 min-height">
      <Form
        className="col-8 col-lg-5 mx-auto login-card"
        onSubmit={handleSubmit}
      >
        <Form.Label className="iniciaSesion d-flex justify-content-center mt-2">
          INICIA SESIÓN
        </Form.Label>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label className="text-white">E-mail</Form.Label>
          <Form.Control
            type="email"
            className="form-control"
            name="email"
            value={formValue.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group
          className="mb-3 mx-auto text-white"
          controlId="formBasicPassword"
        >
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            className="form-control"
            name="password"
            value={formValue.password}
            onChange={handleChange}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mb-1 btn btn-success rounded login-btn"
          disabled={btnDisable}
        >
          Ingresar
        </Button>
        <Form.Text className="text-left text-white mb-4">
          ¿Aún no tienes una cuenta?
          <Link className="login-regis" to="/">
            Registrate
          </Link>
        </Form.Text>

        {login.ok === false && (
          <div className="alert alert-danger mt-3" role="alert">
            {login.msg}
          </div>
        )}
      </Form>
    </Container>
  );
};

export default Login;
