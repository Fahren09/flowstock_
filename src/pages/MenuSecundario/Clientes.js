import React, { useState } from 'react';
import TableComponent from '../../components/secundario/table';
import ModalComponent from '../../components/secundario/modal';
import { Form } from 'react-bootstrap';

function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [currentCliente, setCurrentCliente] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        telefono: ''
    });

    const handleShowModal = (type, cliente = null) => {
        setModalType(type);
        setCurrentCliente(cliente);
        setFormData(cliente ? cliente : { nombre: '', direccion: '', telefono: '' });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentCliente(null);
        setFormData({ nombre: '', direccion: '', telefono: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAgregar = () => {
        setClientes([...clientes, { id: Date.now(), ...formData }]);
        handleCloseModal();
    };

    const handleEditar = () => {
        setClientes(
            clientes.map((cliente) =>
                cliente.id === currentCliente.id ? { ...cliente, ...formData } : cliente
            )
        );
        handleCloseModal();
    };

    const handleEliminar = (id) => {
        setClientes(clientes.filter((cliente) => cliente.id !== id));
    };

    return (
        <div>
            <h4>Clientes</h4>
            <TableComponent
                data={clientes}
                columns={[
                    { key: 'id', label: '#' },
                    { key: 'nombre', label: 'Nombre' },
                    { key: 'direccion', label: 'Dirección' },
                    { key: 'telefono', label: 'Teléfono' }
                ]}
                onAdd={() => handleShowModal('agregar')}
                actions={[
                    { label: 'Ver', variant: 'info', onClick: (item) => handleShowModal('ver', item) },
                    { label: 'Editar', variant: 'primary', onClick: (item) => handleShowModal('editar', item) },
                    { label: 'Eliminar', variant: 'danger', onClick: (item) => handleEliminar(item.id) }
                ]}
            />
            <ModalComponent
                show={showModal}
                title={
                    modalType === 'agregar' ? 'Agregar Cliente' :
                    modalType === 'editar' ? 'Editar Cliente' : 'Ver Cliente'
                }
                onClose={handleCloseModal}
                primaryAction={
                    modalType === 'agregar'
                        ? { label: 'Agregar', onClick: handleAgregar }
                        : modalType === 'editar'
                        ? { label: 'Guardar Cambios', onClick: handleEditar }
                        : null
                }
            >
                {modalType === 'ver' ? (
                    <>
                        <p><strong>Nombre:</strong> {currentCliente?.nombre}</p>
                        <p><strong>Dirección:</strong> {currentCliente?.direccion}</p>
                        <p><strong>Teléfono:</strong> {currentCliente?.telefono}</p>
                    </>
                ) : (
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Ingrese el nombre"
                                disabled={modalType === 'ver'}
                                style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control
                                type="text"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                                placeholder="Ingrese la dirección"
                                disabled={modalType === 'ver'}
                                style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control
                                type="text"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                placeholder="Ingrese el teléfono"
                                disabled={modalType === 'ver'}
                                style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
                            />
                        </Form.Group>
                    </Form>
                )}
            </ModalComponent>
        </div>
    );
}

export default Clientes;
