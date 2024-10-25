// src/components/Salidas.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Col } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function Salida() {
  const [salidas, setSalidas] = useState([
    { producto: 'Laptop', cantidad: 5, fecha: '2023-06-12', tipoPedido: 'envio', socioEmpresa: 'Empresa XYZ', estado: 'pendiente' },
    { producto: 'Escritorio', cantidad: 2, fecha: '2023-06-13', tipoPedido: 'envio', socioEmpresa: 'Empresa ABC', estado: 'completado' },
  ]);

  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [pedido, setPedido] = useState('');
  const [fecha, setFecha] = useState('');
  const [tipoPedido, setTipoPedido] = useState('envio');
  const [socioEmpresa, setSocioEmpresa] = useState('');
  const [estado, setEstado] = useState('pendiente');

  const handleAgregar = () => {
    const nuevaSalida = { producto, cantidad: parseInt(cantidad), fecha, tipoPedido, socioEmpresa, estado };
    setSalidas([...salidas, nuevaSalida]);
    setProducto('');
    setCantidad('');
    setPedido('');
    //setFecha('');
    //setTipoPedido('envio');
    //setSocioEmpresa('');
    //setEstado('pendiente');
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nueva salida</h5>
      <Col xs={9}>
              <Form.Control 
                type="text" 
                placeholder="Buscar..." 
                style={{ backgroundColor: '#2D4076', borderColor: '#C6F8CF', color: '#C6F8CF' }} 
                className="search-input"
              />
      </Col>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Producto"
          className="me-2-principal"
          value={producto}
          style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
          onChange={(e) => setProducto(e.target.value)}
        />
        <Form.Control
          type="number"
          placeholder="Cantidad"
          className="me-2-principal"
          style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />

        <Form.Control
          type="text"
          placeholder="Pedido"
          className="me-2-principal"
          value={pedido}
          style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
          onChange={(e) => setPedido(e.target.value)}
        />

        <Button variant="dark" onClick={handleAgregar} 
        style={{ backgroundColor: '#232D47', color: '#C6F8CF'}} >
          <FaPlus className="me-2" />Agregar
        </Button>
      </Form>

      <ListGroup>
        {salidas.map((salida, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center"
          style={{ backgroundColor: '#232D47', color: '#C6F8CF',border: 'none'}}
          >
            <div>
              <strong>{salida.producto}</strong> <br />
              <small>Fecha: {salida.fecha}</small><br />
              <small>Tipo: {salida.tipoPedido}</small><br />
              <small>Socio/Empresa: {salida.socioEmpresa}</small>
            </div>
            <div>
              <span className="me-3">Cantidad: {salida.cantidad}</span>
              <span className="me-3">Estado: {salida.estado}</span>
              <Button variant="outline-secondary" size="sm"
              style={{ backgroundColor: '#C6F8CF', color: '#232D47',border: 'none'}}
              >
                <FaEdit />Editar
              </Button>
              <Button variant="outline-secondary" size="sm" className="ms-2"
              style={{ backgroundColor: '#C6F8CF', color: '#232D47',border: 'none'}}
              >
               <FaTrash /> Eliminar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Salida;
