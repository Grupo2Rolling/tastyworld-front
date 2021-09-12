import React from 'react';
import DataTable, { createTheme } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import { ChevronDown, Plus, MoreVertical, Edit, Trash } from 'react-feather'
import { Modal, Button } from 'react-bootstrap'

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

    const datosUsuario = [
      {
          usuario: 'Pablo Giroud',
          role: 'Admin'
      },
      {
          usuario: 'Carina Auteri',
          role: 'Usuario'
      },
      {
          usuario: 'Gabriela Navarro',
          role: 'Usuario'
      },
      {
          usuario: 'Pablo Giroud',
          role: 'Admin'
      },
      
  ]

  const datosCategoria = [
    {
        categoria: 'Comidas'
    },
    {
        categoria: 'Bebidas'
    },
    {
        categoria: 'Promos'
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

      const columnasUsuarios = [
        {
          name: 'NOMBRE USUARIO',
          selector: 'usuario',
          sortable: true,
          width: '29%'
        },
        {
          name: 'ROL',
          selector: 'role',
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

      const columnasCategorias = [
        {
          name: 'CATEGORÍA',
          selector: 'categoria',
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
            <div className="d-flex align-items-center">
            <h5 className="text-white p-4">PRODUCTOS</h5>
            <button className="btn btn-light">+</button>
            </div>
            <div className='rounded mx-5'>
            <DataTable
            columns={columnasProductos}
            data={datosProducto}
            />  
            </div>
            <div className="d-flex align-items-center">
            <h5 className="text-white p-4">USUARIOS</h5>
            <button className="btn btn-light">+</button>
            </div>
            <div className='rounded mx-5'>
            <DataTable
            columns={columnasUsuarios}
            data={datosUsuario}
            />  
            </div>
            <div className="d-flex align-items-center">
            <h5 className="text-white p-4">CATEGORÍAS</h5>
            <button className="btn btn-light">+</button>
            </div>
            <div className='rounded mx-5'>
            <DataTable
            columns={columnasCategorias}
            data={datosCategoria}
            />  
            </div>
            
        </div>
        
    )

    function MyVerticallyCenteredModal(props) {
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>MODAL PRODUCTOS</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
    
    function App() {
      const [modalShow, setModalShow] = React.useState(false);
    
      return (
        <>
          <Button variant="primary" onClick={() => setModalShow(true)}>
            Launch vertically centered modal
          </Button>
    
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </>
      );
    }

}

export default Administracion
