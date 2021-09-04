import React, {useState} from 'react'
import {Col, Container, Form, Row, Button} from 'react-bootstrap'

const Login = () => {
    const [formValue, setFormValue] = useState({
        email:"",
        password:"",
    })
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

    const handleSumit = (e) => {
        e.preventDefault()
        const {email, password} = formValue
    }     
    
    return (
        <Container>
        <Form onSubmit={handleSumit }>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Aquí va tu mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        </Container>
    )
}

export default Login
