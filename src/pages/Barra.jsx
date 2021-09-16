import React, { useState, useEffect } from 'react'
import { getComandas } from '../helpers/comandasCocina'
import CardCocina from '../components/CardCocina'

const Barra = () => {
  const [comandas, setComandas] = useState([]);

  useEffect(() => {
    getComandas().then((respuesta) => {
      setComandas(respuesta.comanda);
      console.log(comandas)
    });
  }, []);
  
  return (
    <>
      <div className="container mb-3">
        <h1 className="mb-3">Tasty Kitchen</h1>
        <CardCocina comandas={comandas} />
      </div>
    </>
  );
};


export default Barra
