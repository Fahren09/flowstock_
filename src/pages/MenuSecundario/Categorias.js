import React, { useState } from 'react';
import TableComponent from '../../components/secundario/table';
import ModalComponent from '../../components/secundario/modal';
import { Form } from 'react-bootstrap';

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('');
    const [currentCategoria, setCurrentCategoria] = useState(null);
    const [nombreCategoria, setNombreCategoria] = useState('');

    const handleShowModal = (type, categoria = null) => {
        setModalType(type);
        setCurrentCategoria(categoria);
        setNombreCategoria(categoria ? categoria.nombre : '');
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentCategoria(null);
        setNombreCategoria('');
    };

    const handleChange = (e) => {
        setNombreCategoria(e.target.value);
    };

    const handleAgregar = () => {
        setCategorias([...categorias, { id: Date.now(), nombre: nombreCategoria }]);
        handleCloseModal();
    };

    const handleEditar = () => {
        setCategorias(
            categorias.map((cat) =>
                cat.id === currentCategoria.id ? { ...cat, nombre: nombreCategoria } : cat
            )
        );
        handleCloseModal();
    };

    const handleEliminar = (id) => {
        setCategorias(categorias.filter((cat) => cat.id !== id));
    };

    return (
        <div>
            <h4>Categorías</h4>
            <TableComponent
                data={categorias}
                columns={[
                    { key: 'id', label: '#' },
                    { key: 'nombre', label: 'Nombre' }
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
                title={modalType === 'agregar' ? 'Agregar Categoría' : modalType === 'editar' ? 'Editar Categoría' : 'Ver Categoría'}
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
                    <p><strong>Nombre:</strong> {currentCategoria?.nombre}</p>
                ) : (
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre de la Categoría</Form.Label>
                            <Form.Control
                                type="text"
                                value={nombreCategoria}
                                onChange={handleChange}
                                placeholder="Ingrese el nombre"
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

export default Categorias;
