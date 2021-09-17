import React, { useState, useEffect } from 'react'
import { getComandas } from '../helpers/comandas'
import CardBarra from '../components/CardBarra'
import { Container } from 'react-bootstrap'

const Barra = () => {
  const [comandas, setComandas] = useState([])
  const [comandasBarra, setComandasBarra] = useState([])

  useEffect(() => {
    getComandas().then((respuesta) => {
      setComandas(respuesta.comanda)
    })
  }, [])

  useEffect(() => {
    let comandaBarra = comandas.filter((comanda) => {
      return comanda.tipo === "Bebida";
    })
    setComandasBarra(comandaBarra)
  }, [])

  return (
    <>
      <Container fluid className="mt-2 min-height">
        <CardBarra comandas={comandasBarra} />
      </Container>
    </>
  )
}

export default Barra