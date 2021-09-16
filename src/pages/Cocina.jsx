import React, { useState, useEffect } from 'react'
import { getComandas } from '../helpers/comandasCocina'
import CardCocina from '../components/CardCocina'

const Cocina = () => {//borro {data} que estaba como parametro
  const [comandas, setComandas] = useState([]);

  useEffect(() => {
    getComandas().then((respuesta) => {
      setComandas(respuesta.comanda);
      console.log(comandas)
    });
  }, []);
  
  //let comanda = ["a", "b", "c" ,"d"]
  return (
    <>
      <div className="container mb-3">
        <h1 className="mb-3">Tasty Kitchen</h1>
        <CardCocina comandas={comandas} />
      </div>
    </>
  );
};


export default Cocina
