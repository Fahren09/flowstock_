import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Estilo.css'; // Asegúrate de que los estilos ya están creados
import logo from "./img/LogoFlowStock.png"; // Ajusta el path si es necesario

function IniciarSesion() {
  const [formData, setFormData] = useState({
    email: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
    // Aquí puedes agregar la lógica para autenticar al usuario
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
            <h3 className="text-center mb-4" style={{ color: '#FEA099' }}>Iniciar Sesión</h3>
            
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control 
                  type="email" 
                  placeholder="Ingresa tu correo electrónico"
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
                   className="me-3-usuario"
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
                  style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
                   className="me-3-usuario"
                />
              </Form.Group>

              {/* Centrar el botón de Iniciar Sesión */}
              <div className="text-center">
                <Button variant="primary" type="submit" style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}>
                  Iniciar Sesión
                </Button>
              </div>
            </Form>

            {/* Enlace para registrarse */}
            <div className="text-center mt-4">
              <p style={{ color: '#C6F8CF' }}>¿No tienes cuenta? 
                <Link to="/Registro" style={{ color: '#FEA099' }}> Regístrate</Link>
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default IniciarSesion;
