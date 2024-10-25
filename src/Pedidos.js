// src/components/Pedidos.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Col } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function Pedidos() {
  const [pedidos, setPedidos] = useState([
    { tipo: 'envio', empresa: 'Empresa A', fechaCreacion: '2023-10-01', fechaLlegada: '2023-10-10', estado: 'pendiente' },
    { tipo: 'llegada', empresa: 'Empresa B', fechaCreacion: '2023-10-05', fechaLlegada: '2023-10-12', estado: 'completado' },
  ]);

  const [tipo, setTipo] = useState('envio');
  const [empresa, setEmpresa] = useState('Empresa A');
  const [fechaLlegada, setFechaLlegada] = useState('');
  const [estado, setEstado] = useState('pendiente');

  const empresas = ['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D'];

  const handleAgregar = () => {
    const nuevoPedido = { tipo, empresa, fechaCreacion: new Date().toISOString().split('T')[0], fechaLlegada, estado };
    setPedidos([...pedidos, nuevoPedido]);
    setTipo('envio');
    setEmpresa('Empresa A');
    setFechaLlegada('');
    setEstado('pendiente');
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }} >Registrar nuevo pedido</h5>
      <Col xs={9}>
              <Form.Control 
                type="text" 
                placeholder="Buscar..." 
                style={{ backgroundColor: '#2D4076', borderColor: '#C6F8CF', color: '#C6F8CF' }} 
                className="search-input"
              />
      </Col>
      <Form className="d-flex mb-3">
        <Form.Select
          className="me-2-principal"
          value={tipo}
          style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="envio">Envio</option>
          <option value="llegada">Llegada</option>
        </Form.Select>

        <Form.Select
          className="me-2-principal"
          value={empresa}
          style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
          onChange={(e) => setEmpresa(e.target.value)}
        >
          {empresas.map((empresa, index) => (
            <option key={index} value={empresa}>
              {empresa}
            </option>
          ))}
        </Form.Select>

        <Form.Control
          type="date"
          className="me-2-principal"
          value={fechaLlegada}
          style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
          onChange={(e) => setFechaLlegada(e.target.value)}
        />

        <Button variant="dark" onClick={handleAgregar}
        style={{ backgroundColor: '#232D47', color: '#C6F8CF'}}
        >
          <FaPlus className="me-2" /> Agregar
        </Button>
      </Form>

      <ListGroup>
        {pedidos.map((pedido, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center"
          style={{ backgroundColor: '#232D47', color: '#C6F8CF',border: 'none'}}
          >
            <div>
              <strong>Tipo: {pedido.tipo}</strong> <br />
              <small>Empresa: {pedido.empresa}</small> <br />
              <small>Fecha de creación: {pedido.fechaCreacion}</small> <br />
              <small>Fecha de llegada: {pedido.fechaLlegada}</small> <br />
              <small>Estado: {pedido.estado}</small>
            </div>
            <div>
              <Button variant="outline-secondary" size="sm" className="me-2"
              style={{ backgroundColor: '#C6F8CF', color: '#232D47',border: 'none'}}
              >
              <FaEdit />Editar
              </Button>
              <Button variant="outline-secondary" size="sm" className="ms-2"
              style={{ backgroundColor: '#C6F8CF', color: '#232D47',border: 'none'}}
              >
              <FaTrash />Eliminar
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Pedidos;
