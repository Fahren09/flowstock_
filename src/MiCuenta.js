import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Image, Navbar, Dropdown, Nav } from 'react-bootstrap';
import { FaUserEdit, FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Estilo.css';
import logo from './img/LogoFlowStock.png'; // Ajusta el path si es necesario

function MiCuenta() {
  const navigate = useNavigate();
  
  const [userData, setUserData] = useState({
    nombre: 'Juan Pérez',
    email: 'juanperez@example.com',
    tipo: 'Almacenista',
    imagenPerfil: 'https://via.placeholder.com/150', // Imagen temporal
  });

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(userData);
  
  // Nuevo estado para la imagen de perfil cargada
  const [imagenTemporal, setImagenTemporal] = useState(userData.imagenPerfil);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejar el cambio de imagen de perfil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagenTemporal(imageUrl); // Actualizar la imagen que se muestra
    }
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    // Guardar la imagen en los datos del usuario al confirmar
    setUserData({ ...formData, imagenPerfil: imagenTemporal });
    setEditMode(false);
  };

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col xs={2} style={{ backgroundColor: '#232D47', color: '#0F8D89' }} className="p-3">
          <div className="d-flex align-items-center mb-4">
            <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
            <h4 className="fw-bold" style={{ color: '#FEA099' }}>FlowStock</h4>
          </div>
        </Col>

        <Col xs={10} className="p-4" style={{ backgroundColor: '#232D47', color: '#0F8D89' }}>
          {/* Navbar */}
          <Navbar expand="lg" style={{ backgroundColor: '#232D47', color: '#0F8D89' }} className="mb-3">
            <Navbar.Brand style={{ color: '#FEA099' }}>Mi Cuenta</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-content" />
            <Navbar.Collapse id="navbar-content">
              <Nav className="ms-auto d-flex align-items-center">
                <FaBell className="me-3" style={{ cursor: 'pointer', color: '#70B69B' }} />
                <Dropdown className="me-3">
                  <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{ backgroundColor: 'transparent', border: 'none', color: '#70B69B' }}>
                    <FaCog style={{ cursor: 'pointer' }} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleRedirect('/SistemaDeInventario')}>Volver a inventario</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleRedirect('/cerrar-sesion')}>Cerrar sesión</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="d-flex align-items-center me-4">
                  <img
                    src="https://via.placeholder.com/40" // URL temporal, reemplázala por la imagen real
                    alt="Usuario"
                    className="rounded-circle me-2"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div className="text-end">
                    <span style={{ color: '#FEA099' }}>{userData.nombre}</span><br />
                    <small style={{ color: '#FEA099' }}>{userData.tipo}</small>
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Card className="p-4" style={{ backgroundColor: '#2D4076', color: '#0F8D89' }}>
            <Row>
              <Col xs={12} md={4} className="text-center" >
                <Image src={imagenTemporal} roundedCircle width="150px" height="150px" />
                {editMode && (
                  <Form.Group controlId="formFile" className="mt-3-usuario" >
                    <Form.Label >Cambiar foto de perfil</Form.Label>
                    <Form.Control type="file" onChange={handleImageChange} />
                  </Form.Group>
                )}
              </Col>

              <Col xs={12} md={8}>
                <Form>
                  <Form.Group as={Row} className="mt-3 usuario">
                    <Form.Label column sm={3}>Nombre</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        disabled={!editMode}
                        style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                        className="me-3-usuario"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mt-3 usuario">
                    <Form.Label column sm={3}>Correo Electrónico</Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!editMode}
                        style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                        className="me-3-usuario"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} className="mt-3 usuario">
                    <Form.Label column sm={3}>Rol</Form.Label>
                    <Col sm={9}>
                      <Form.Control type="text" value={userData.tipo} disabled
                      style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                      className="me-3-usuario"
                      />
                      
                    </Col>
                  </Form.Group>

                  {editMode && (
                    <Form.Group as={Row} className="mt-3 usuario">
                      <Form.Label column sm={3}>Contraseña</Form.Label>
                      <Col sm={9}>
                        <Form.Control type="password" placeholder="Nueva contraseña" 
                        style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                        className="me-3-usuario"
                        />
                      </Col>
                    </Form.Group>
                  )}

                  <div className="d-flex justify-content-end">
                    {!editMode ? (
                      <Button variant="primary" onClick={handleEdit} style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}>
                        <FaUserEdit className="me-2" />Editar
                      </Button>
                    ) : (
                      <>
                        <Button variant="secondary" className="me-2" onClick={handleEdit}>Cancelar</Button>
                        <Button variant="success" onClick={handleSave}>Guardar</Button>
                      </>
                    )}
                  </div>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MiCuenta;
