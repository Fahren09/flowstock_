import React, { useState } from 'react';
import { Table, Button, Modal, Form } from 'react-bootstrap';

function Categorias() {
    const [categorias, setCategorias] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState(''); // "agregar", "editar", "ver"
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
            <Button 
                variant="success" 
                onClick={() => handleShowModal('agregar')} 
                style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
            >
                Agregar Categoría
            </Button>
            
            <Table className="mt-3" style={{ border: 'none' }}>
    <thead>
        <tr>
            <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }}>#</th>
            <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }}>Nombre</th>
            <th style={{ border: 'none', backgroundColor: '#232D47', color: '#C6F8CF !important' }}>Acciones</th>
        </tr>
    </thead>
    <tbody>
        {categorias.map((categoria, index) => (
            <tr key={categoria.id} >
                <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }}>{index + 1}</td>
                <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }}>{categoria.nombre}</td>
                <td style={{ backgroundColor: '#0F8D89', color: '#C6F8CF', border: 'none' }}>
                    <Button
                        variant="info"
                        onClick={() => handleShowModal('ver', categoria)}
                        className="me-2"
                        style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
                    >
                        Ver
                    </Button>
                    <Button
                        variant="primary"
                        onClick={() => handleShowModal('editar', categoria)}
                        className="me-2"
                        style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
                    >
                        Editar
                    </Button>
                    <Button 
                        variant="danger" 
                        onClick={() => handleEliminar(categoria.id)} 
                        style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none' }}
                    >
                        Eliminar
                    </Button>
                </td>
            </tr>
        ))}
    </tbody>
</Table>


            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none'  }}>
                    <Modal.Title>
                        {modalType === 'agregar' && 'Agregar Categoría'}
                        {modalType === 'editar' && 'Editar Categoría'}
                        {modalType === 'ver' && 'Ver Categoría'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#232D47', color: '#C6F8CF' }}>
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
                                    style={{ backgroundColor: '#232D47', color: '#C6F8CF' }}
                                />
                            </Form.Group>
                        </Form>
                    )}
                </Modal.Body>
                <Modal.Footer style={{ backgroundColor: '#232D47', color: '#C6F8CF', border: 'none'  }}>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                    {modalType === 'agregar' && (
                        <Button variant="success" onClick={handleAgregar}
                        style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none'  }}
                        >
                            Agregar
                        </Button>
                    )}
                    {modalType === 'editar' && (
                        <Button variant="primary" onClick={handleEditar}
                        style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none'  }}
                        >
                            Guardar Cambios
                        </Button>
                    )}
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Categorias;
