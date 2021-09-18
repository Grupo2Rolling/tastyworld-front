import React, { useState, useEffect } from 'react'
import { getComandasCocina } from '../helpers/comandas'
import CardCocina from '../components/CardCocina'
import { Container } from 'react-bootstrap'

const Cocina = () => {
  const [comandas, setComandas] = useState([])
 
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