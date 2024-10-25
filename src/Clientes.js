// src/components/Clientes.js
import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';

function Clientes() {
    // Estado para manejar los datos de clientes
    const [clientes, setClientes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedCliente, setSelectedCliente] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        telefono: ''
    });

    // Función para abrir el modal
    const openModal = (type, cliente = null) => {
        setModalType(type);
        setSelectedCliente(cliente);
        setFormData(cliente ? cliente : { nombre: '', direccion: '', telefono: '' });
        setShowModal(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedCliente(null);
        setFormData({ nombre: '', direccion: '', telefono: '' });
    };

    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Función para agregar un cliente
    const handleAdd = () => {
        setClientes([...clientes, { ...formData, id: clientes.length + 1 }]);
        closeModal();
    };

    // Función para editar un cliente
    const handleEdit = () => {
        setClientes(
            clientes.map((cliente) =>
                cliente.id === selectedCliente.id ? { ...selectedCliente, ...formData } : cliente
            )
        );
        closeModal();
    };

    // Función para eliminar un cliente
    const handleDelete = (id) => {
        setClientes(clientes.filter((cliente) => cliente.id !== id));
    };

    return (
        <div>
            <h4>Clientes</h4>
            <Button variant="primary" onClick={() => openModal('add')} 
            style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }} >Agregar Cliente</Button>
            <Table striped bordered hover className="mt-3" style={{ border: 'none' }} >
                <thead>
                    <tr>
                        <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }} >ID</th>
                        <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }} >Nombre</th>
                        <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }} >Dirección</th>
                        <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }} >Teléfono</th>
                        <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }} >Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >{cliente.id}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >{cliente.nombre}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >{cliente.direccion}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >{cliente.telefono}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >
                                <Button variant="warning" onClick={() => openModal('edit', cliente)}
                                    style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
                                    >Editar</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(cliente.id)}
                                    style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
                                    >Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Modal para Agregar y Editar Clientes */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none'  }} >
                    <Modal.Title>{modalType === 'add' ? 'Agregar Cliente' : 'Editar Cliente'}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#232D47', color: '#C6F8CF' }} >
                    <Form>
                        <Form.Group controlId="formNombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                style={{ backgroundColor: '#232D47', color: '#C6F8CF' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formDireccion">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                                style={{ backgroundColor: '#232D47', color: '#C6F8CF' }}
                            />
                        </Form.Group>
                        <Form.Group controlId="formTelefono">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                style={{ backgroundColor: '#232D47', color: '#C6F8CF' }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }} >
                    <Button variant="secondary" onClick={closeModal}>Cancelar</Button>
                    <Button
                        variant="primary"
                        onClick={modalType === 'add' ? handleAdd : handleEdit}
                        style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none'  }}
                    >
                        {modalType === 'add' ? 'Agregar' : 'Guardar Cambios'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Clientes;
