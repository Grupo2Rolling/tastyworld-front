import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getComandasCocina } from '../helpers/comandas'
import CardCocina from '../components/CardCocina'
import { Container } from 'react-bootstrap'

const Cocina = () => {
  const [comandas, setComandas] = useState([])
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('auth')) && JSON.parse(localStorage.getItem('auth')).usuario
  useEffect(() => {
    const redireccion = () => user.rol === 'ADMIN_ROLE' || user.rol === 'CHEF_ROLE' || history.push("/")
    redireccion()
  }, []);
  useEffect(() => {
    getComandasCocina().then((respuesta) => {
      setComandas(respuesta.comanda);
    })
  }, [comandas])

  return (
    <>
      <Container fluid className="mt-2">
        <CardCocina comandas={comandas} />
      </Container>
    </>
  )
}

export default Cocina