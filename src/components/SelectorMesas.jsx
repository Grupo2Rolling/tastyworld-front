import React,{useEffect, useState} from 'react'
import { mesasTodasGet } from '../helpers/mesas';
const SelectorMesas = ({mesa,setMesa}) => {
    const [mesasLibres, setMesasLibres] = useState([]);

    useEffect(() => {
        mesasTodasGet().then((respuesta) => {
          let todas = respuesta.mesa;
          let libres = todas.filter((mesa) => {
            return mesa.estado === true;
          });
          setMesasLibres(libres);
          console.log(libres);
        });
      }, []);

    
    return (
        <div>
            <h3>Mesas</h3>
              
                
              <div className="form-group">
                
                 <select name="mesa" id="loquesea" className="form-control">
                   {mesasLibres.map((mesita) => (
                     <option onChange={setMesa(mesita)} value={mesita} key={mesita.id}>{mesita.numero}</option>
                   ))}
                 </select>
              </div>
        </div>
    )
}

export default SelectorMesas
