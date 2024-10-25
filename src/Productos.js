// src/components/Productos.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Col } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function Productos() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Laptop',
      descripcion: 'Laptop de alta gama',
      stock: 10,
      categoria: 'Electrónica',
      estado: 'activo',
      fecha_creacion: '2023-06-10',
    },
    {
      id: 2,
      nombre: 'Escritorio',
      descripcion: 'Escritorio de madera',
      stock: 5,
      categoria: 'Muebles',
      estado: 'activo',
      fecha_creacion: '2023-06-11',
    },
  ]);

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('Electrónica');
  const [estado, setEstado] = useState('activo');

  const categorias = ['Electrónica', 'Muebles', 'Ropa', 'Juguetes', 'Alimentos'];

  const handleAgregarProducto = () => {
    const nuevoProducto = {
      id: productos.length + 1,
      nombre,
      descripcion,
      stock: parseInt(stock),
      categoria,
      estado,
      fecha_creacion: new Date().toISOString().split('T')[0],
    };
    setProductos([...productos, nuevoProducto]);
    setNombre('');
    setDescripcion('');
    setStock('');
    setCategoria('Electrónica');
    setEstado('activo');
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nuevo producto</h5>
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
          placeholder="Nombre del producto"
          className="me-2-principal"
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF', marginRight: '15px' }}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="Descripción del producto"
          className="me-2-principal"
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF', marginRight: '15px' }}
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <Form.Control
          type="number"
          placeholder="Cantidad en stock"
          className="me-2-principal"
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF', marginRight: '15px' }}
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        
        {/* Combobox de Categoría */}
        <Form.Select
          className="me-2-principal"
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF', marginRight: '15px' }}
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </Form.Select>

        <Button
          variant="dark"
          onClick={handleAgregarProducto}
          style={{ backgroundColor: '#232D47', color: '#C6F8CF' }}
        >
          <FaPlus className="me-2" /> Agregar producto
        </Button>
      </Form>

      <ListGroup>
        {productos.map((producto) => (
          <ListGroup.Item
            key={producto.id}
            className="d-flex justify-content-between align-items-center"
            style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
          >
            <div>
              <strong>{producto.nombre}</strong> <br />
              <small>Descripción: {producto.descripcion}</small> <br />
              <small>Stock: {producto.stock}</small> <br />
              <small>Categoría: {producto.categoria}</small> <br />
              <small>Estado: {producto.estado}</small> <br />
              <small>Fecha de creación: {producto.fecha_creacion}</small>
            </div>
            <div>
              <Button
                variant="outline-secondary"
                size="sm"
                className="me-2"
                style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}
              >
                <FaEdit /> Editar
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}
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

export default Productos;
