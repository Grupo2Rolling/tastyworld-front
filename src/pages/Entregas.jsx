import React, { useState, useEffect } from 'react'
import { getComandasEntregas } from '../helpers/comandas'
import CardEntregas from '../components/CardEntregas'
import { Container } from 'react-bootstrap'

const Entrega = () => {
  const [comandas, setComandas] = useState([])

  useEffect(() => {
    getComandasEntregas().then((respuesta) => {
      setComandas(respuesta.comanda);
    });
  }, [comandas]);
  
  return (
    <>
      <Container fluid className="mt-2">
       <CardEntregas comandas={comandas} />
      </Container>
    </>
  )
}

export default Entrega