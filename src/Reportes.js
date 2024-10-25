// src/components/Reportes.js
import React, { useState } from 'react';
import { Form, Button, ListGroup, Modal, Col } from 'react-bootstrap';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

function Reportes() {
  const [reportes, setReportes] = useState([
    { id: 1, fecha: '2024-10-01', estado: 1 },
    { id: 2, fecha: '2024-10-15', estado: 1 },
  ]);

  const [fecha, setFecha] = useState('');
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleAgregar = () => {
    if (editIndex !== null) {
      // Editar reporte existente
      const updatedReportes = reportes.map((reporte, index) =>
        index === editIndex ? { ...reporte, fecha } : reporte
      );
      setReportes(updatedReportes);
    } else {
      // Agregar nuevo reporte
      const nuevoReporte = {
        id: reportes.length + 1,
        fecha,
        estado: 1,
      };
      setReportes([...reportes, nuevoReporte]);
    }

    resetForm();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFecha(reportes[index].fecha);
    setShow(true);
  };

  const handleDelete = (index) => {
    const updatedReportes = reportes.filter((_, idx) => idx !== index);
    setReportes(updatedReportes);
  };

  const resetForm = () => {
    setFecha('');
    setEditIndex(null);
    setShow(false);
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Gestionar Reportes</h5>

      <Col xs={9}>
        <Form.Control 
          type="text" 
          placeholder="Buscar..." 
          style={{ backgroundColor: '#2D4076', borderColor: '#C6F8CF', color: '#C6F8CF' }} 
          className="search-input"
        />
      </Col>

      {/* Contenedor para el botón */}
      <div className="d-flex justify-content-end mt-3">
        <Button 
          variant="dark" 
          onClick={() => setShow(true)}
          style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
        >
          <FaPlus className="me-2" /> Agregar Reporte
        </Button>
      </div>

      <Modal show={show} onHide={resetForm} >
        <Modal.Header closeButton style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}>
          <Modal.Title>{editIndex !== null ? 'Editar Reporte' : 'Nuevo Reporte'}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}>
          <Form>
            <Form.Group controlId="formFecha" style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}>
              <Form.Label>Fecha del Reporte</Form.Label>
              <Form.Control
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
                style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}>
          <Button variant="secondary" onClick={resetForm}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleAgregar } style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none'}}>
            {editIndex !== null ? 'Actualizar' : 'Agregar'}
          </Button>
        </Modal.Footer>
      </Modal>

      <ListGroup className="mt-3">
        {reportes.map((reporte, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center"
            style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
          >
            <div>
              <strong>Fecha: {reporte.fecha}</strong> <br />
              <small>Estado: {reporte.estado === 1 ? 'Activo' : 'Inactivo'}</small>
            </div>
            <div>
              <Button variant="outline-secondary" size="sm" className="me-2" onClick={() => handleEdit(index)}>
                <FaEdit />
              </Button>
              <Button variant="outline-danger" size="sm" onClick={() => handleDelete(index)}>
                <FaTrash />
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Reportes;
