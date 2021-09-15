
import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { postAuth } from "../helpers/autetication";
import {Container, Form, Button} from 'react-bootstrap'

const Login = () => {
    const isMounted = useRef(true)
    const history= useHistory()
    const [formValue, setFormValue] = useState({
        email:"",
        password:"",
    })
    const [btnDisable, setBtnDisable]= useState(false)
    const [login, setLogin] = useState({})

    useEffect(()=>{
        if (login.token){
            localStorage.setItem("auth",JSON.stringify(login))
            setTimeout(()=>{
                history.pushState("/")
            }, 1000)
        }
    }, [login, history])

    useEffect(()=>{
        return()=>{
            isMounted.current= false 
        }
    }, [])

    const handleChance= ({target}) =>{
        setFormValue({
            ...formValue,
            [target.name]: target.value    
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const {email, password} = formValue
        if (email && password){
            setBtnDisable(true)
        if (isMounted.current){
            postAuth(formValue).then((respuesta)=>{
                setLogin(respuesta)
                setBtnDisable(false)
                setFormValue({
                    email: "",
                    password: ""
                })
            })
        }
        }
    }  
    
    
    return (
        <Container>
        <Form onSubmit={ (e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Aquí va tu mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={formValue.email}
                    onChange={ handleChance }/>
                <Form.Text className="text-muted">
                    No compartas tu información con nadie.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={formValue.password}
                    onChange={handleChance} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn btn-success" disabled={setBtnDisable}>
            INGRESAR
            </Button>
            
            {login.ok === false && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {login.msg}
                  </div>
                )}

        </Form>
        </Container>
    )
}

export default Login
