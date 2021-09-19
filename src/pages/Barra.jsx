import React, { useState, useEffect } from 'react'
import { getComandasBarra } from '../helpers/comandas'
import CardBarra from '../components/CardBarra'
import { Container } from 'react-bootstrap'

const Barra = () => {
  const [comandas, setComandas] = useState([])

  useEffect(() => {
    getComandasBarra().then((respuesta) => {
      setComandas(respuesta.comanda);
    })
  }, [comandas])

  return (
    <>
      <Container fluid className="mt-2 min-height">
        <CardBarra comandas={comandas} />
      </Container>
    </>
  )
}

export default Barra