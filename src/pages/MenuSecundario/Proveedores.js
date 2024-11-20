import React, { useState } from 'react';
import TableComponent from '../../components/secundario/table';
import ModalComponent from '../../components/secundario/modal';
import { Form } from 'react-bootstrap';

function Proveedores() {
    const [proveedores, setProveedores] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [currentProveedor, setCurrentProveedor] = useState(null);
    const [formData, setFormData] = useState({ nombre: '', direccion: '', telefono: '' });

    const handleShowModal = (type, proveedor = null) => {
        setModalType(type);
        setCurrentProveedor(proveedor);
        setFormData(proveedor || { nombre: '', direccion: '', telefono: '' });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentProveedor(null);
        setFormData({ nombre: '', direccion: '', telefono: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        if (modalType === 'add') {
            setProveedores([...proveedores, { ...formData, id: Date.now() }]);
        } else if (modalType === 'edit' && currentProveedor) {
            setProveedores(
                proveedores.map((prov) =>
                    prov.id === currentProveedor.id ? { ...prov, ...formData } : prov
                )
            );
        }
        handleCloseModal();
    };

    const handleDelete = (id) => {
        setProveedores(proveedores.filter((prov) => prov.id !== id));
    };

    return (
        <div>
            <h4>Proveedores</h4>
            <TableComponent
                data={proveedores}
                columns={[
                    { key: 'id', label: '#' },
                    { key: 'nombre', label: 'Nombre' },
                    { key: 'direccion', label: 'Dirección' },
                    { key: 'telefono', label: 'Teléfono' },
                ]}
                onAdd={() => handleShowModal('add')}
                actions={[
                    { label: 'Ver', variant: 'info', onClick: (item) => handleShowModal('ver', item) },
                    { label: 'Editar', variant: 'primary', onClick: (item) => handleShowModal('edit', item) },
                    { label: 'Eliminar', variant: 'danger', onClick: (item) => handleDelete(item.id) },
                ]}
            />
            <ModalComponent
                show={showModal}
                title={
                    modalType === 'add'
                        ? 'Agregar Proveedor'
                        : modalType === 'edit'
                        ? 'Editar Proveedor'
                        : 'Ver Proveedor'
                }
                onClose={handleCloseModal}
                primaryAction={
                    modalType !== 'view' && {
                        label: modalType === 'add' ? 'Agregar' : 'Guardar Cambios',
                        onClick: handleSave,
                    }
                }
            >
                {modalType === 'view' ? (
                    <div>
                        <p><strong>Nombre:</strong> {formData.nombre}</p>
                        <p><strong>Dirección:</strong> {formData.direccion}</p>
                        <p><strong>Teléfono:</strong> {formData.telefono}</p>
                    </div>
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
                                style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
                            />
                        </Form.Group>
                    </Form>
                )}
            </ModalComponent>
        </div>
    );
}

export default Proveedores;
