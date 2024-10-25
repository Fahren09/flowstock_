// src/components/Proveedores.js
import React, { useState } from 'react';
import { Button, Table, Modal, Form } from 'react-bootstrap';
function Proveedores() {
    // Estado para manejar los datos de proveedores
    const [proveedores, setProveedores] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedProveedor, setSelectedProveedor] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        telefono: ''
    });
    // Función para abrir el modal
    const openModal = (type, proveedor = null) => {
        setModalType(type);
        setSelectedProveedor(proveedor);
        setFormData(proveedor ? proveedor : { nombre: '', direccion: '', telefono: '' });
        setShowModal(true);
    };
    // Función para cerrar el modal
    const closeModal = () => {
        setShowModal(false);
        setSelectedProveedor(null);
        setFormData({ nombre: '', direccion: '', telefono: '' });
    };
    // Manejar cambios en el formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    // Función para agregar un proveedor
    const handleAdd = () => {
        setProveedores([...proveedores, { ...formData, id: proveedores.length + 1 }]);
        closeModal();
    };
    // Función para editar un proveedor
    const handleEdit = () => {
        setProveedores(
            proveedores.map((proveedor) =>
                proveedor.id === selectedProveedor.id ? { ...selectedProveedor, ...formData } : proveedor
            )
        );
        closeModal();
    };
    // Función para eliminar un proveedor
    const handleDelete = (id) => {
        setProveedores(proveedores.filter((proveedor) => proveedor.id !== id));
    };
    return (
        <div>
            <h4>Proveedores</h4>
            <Button variant="primary" onClick={() => openModal('add')} 
                style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
                >Agregar Proveedor</Button>
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
                    {proveedores.map((proveedor) => (
                        <tr key={proveedor.id}>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >{proveedor.id}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >{proveedor.nombre}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }}>{proveedor.direccion}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >{proveedor.telefono}</td>
                            <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }} >
                                <Button variant="warning" onClick={() => openModal('edit', proveedor)} 
                                style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
                                >Editar</Button>{' '}
                                <Button variant="danger" onClick={() => handleDelete(proveedor.id)} 
                                style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }} >Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Modal para Agregar y Editar Proveedores */}
            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none'  }} >
                    <Modal.Title>{modalType === 'add' ? 'Agregar Proveedor' : 'Editar Proveedor'}</Modal.Title>
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
                <Modal.Footer style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none'  }} >
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
export default Proveedores;