// src/components/Entradas.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function Entrada() {
  const [entradas, setEntradas] = useState([
    { producto: 'Laptop', cantidad: 10, fecha: '2023-06-10' },
    { producto: 'Escritorio', cantidad: 5, fecha: '2023-06-11' },
  ]);

  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [pedido, setPedido] = useState('');
  const [fecha, setFecha] = useState('');

  const handleAgregar = () => {
    const nuevaEntrada = { producto, cantidad: parseInt(cantidad), pedido, fecha };
    setEntradas([...entradas, nuevaEntrada]);
    setProducto('');
    setCantidad('');
    setPedido('');
    setFecha('');
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }} >Registrar nueva entrada</h5>
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
          value={cantidad}
          style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
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

        <Button variant="dark" onClick={handleAgregar} style={{ backgroundColor: '#232D47', color: '#C6F8CF'}}>
          <FaPlus className="me-2" />Agregar
        </Button>
        
      </Form>

      <ListGroup>
        {entradas.map((entrada, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center" 
          style={{ backgroundColor: '#232D47', color: '#C6F8CF',border: 'none'}}>
            <div>
              <strong>{entrada.producto}</strong> <br />
              <small>Fecha: {entrada.fecha}</small>
            </div>
            <div>
            <span className="me-3">Cantidad: {entrada.cantidad}</span>
              <Button variant="outline-secondary" size="sm"
              style={{ backgroundColor: '#C6F8CF', color: '#232D47',border: 'none'}}
              >
                Editar
              </Button>
              <Button variant="outline-secondary" size="sm" className="ms-2"
              style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none'}}
              >
                Eliminar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Entrada;
