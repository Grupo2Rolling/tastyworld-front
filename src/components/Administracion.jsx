import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { ChevronDown, Plus, MoreVertical, Edit, Trash } from 'react-feather'

const Administracion = () => {
    const datosProducto = [
        {
            nombre: 'Fideos con puré',
            precio: '$15',
            pais: 'Amaicha del valle'
        },
        {
            nombre: 'Arroz con pollo',
            precio: '$100',
            pais: 'Brasil'
        },
        {
            nombre: 'Bife con ensalada',
            precio: '$600',
            pais: 'Tucuman'
        },
        {
            nombre: 'Empanas',
            precio: '$50',
            pais: 'Argentina'
        },
    ]
    const columnasProductos = [
        {
          name: 'NOMBRE',
          selector: 'nombre',
          sortable: true,
          width: '29%'
        },
        {
          name: 'PRECIO',
          selector: 'precio',
          sortable: true,
          width: '29%'
        },
        {
          name: 'PAIS',
          selector: 'pais',
          sortable: true,
          width: '29%'
        },
        {
          name: 'ACCIONES',
          allowOverflow: true,
          center: true,
          width: '10%',
          cell: row => {
            return (
              <div className='d-flex'>
                    <Link to={``} className='dropdown-item'>
                      <Edit size={15} />
                    </Link>
                    <button className='dropdown-item'>
                      <Trash size={15} />

                    </button>
              </div>
            )
          }
        }
      ]
    return (
        <div className="bg">
            <div>
            <h5 className="text-white p-4">PRODUCTOS</h5>
            <button className="btn btn-light">+</button>
            </div>
            <div className='rounded mx-5'>
            <DataTable
            columns={columnasProductos}
            data={datosProducto}
            />  
            </div>
            
        </div>
    )
}

export default Administracion
