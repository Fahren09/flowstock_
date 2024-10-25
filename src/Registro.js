import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Estilo.css'; 
import logo from "./img/LogoFlowStock_6.png"; 

function RegistroUsuarios() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    tipo: 'empleado',
    foto: null,
  });

  const handleChange = (e) => {
    if (e.target.name === 'foto') {
      setFormData({ ...formData, foto: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
  };

  return (
    <Container fluid className="vh-100" style={{ backgroundColor: '#232D47', position: 'relative' }}>
      
      {/* Logo en la esquina superior izquierda */}
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <img src={logo} alt="logo" style={{ width: '100px', height: '100px' }} />
      </div>

      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={6}>
          <Card className="p-4" style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}>
            <h3 className="text-center mb-4" style={{ color: '#FEA099' }}>Registro de Usuario</h3>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formNombre" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Ingresa tu nombre"
                  name="nombre" 
                  value={formData.nombre} 
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                  className="me-2-principal"
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Ingresa tu correo electrónico"
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                  className="me-2-principal"
                />
              </Form.Group>

              <Form.Group controlId="formContraseña" className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Ingresa tu contraseña"
                  name="contraseña" 
                  value={formData.contraseña} 
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                  className="me-2-principal"
                />
              </Form.Group>

              <Form.Group controlId="formFoto" className="mb-3">
                <Form.Label>Foto de Usuario</Form.Label>
                <Form.Control 
                  type="file" 
                  name="foto"
                  onChange={handleChange}
                  accept="image/*"
                  style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                  className="me-2-principal"
                />
              </Form.Group>

              <Form.Group controlId="formTipo" className="mb-3">
                <Form.Label>Tipo de Usuario</Form.Label>
                <Form.Select 
                  name="tipo" 
                  value={formData.tipo} 
                  onChange={handleChange}
                  style={{ backgroundColor: '#2D4076',  color: '#C6F8CF',  marginRight: '15px'}}
                  className="me-2-principal"
                >
                  <option value="administrador">Administrador</option>
                  <option value="empleado">Empleado</option>
                </Form.Select>
              </Form.Group>

              {/* Centrar el botón de Registrar */}
              <div className="text-center ">
                <Button variant="primary" type="submit" style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}>
                  Registrar
                </Button>
              </div>
            </Form>

            {/* Enlace para iniciar sesión */}
            <div className="text-center mt-4">
              <p style={{ color: '#C6F8CF' }}>¿Ya tienes cuenta? 
                <Link to="/IniciarSesion" style={{ color: '#FEA099' }}> Iniciar sesión</Link>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegistroUsuarios;
