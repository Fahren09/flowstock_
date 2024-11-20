// IniciarSesion.js
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Logo from '../components/InicioRegistro/logo';
import CardPrincipal from '../components/InicioRegistro/card_principal';
import EnlaceRegistro from '../components/InicioRegistro/enlace_registro'; 
import '../styles/Estilo.css';

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
  };

  return (
    <Container fluid className="vh-100" style={{ backgroundColor: '#232D47', position: 'relative' }}>
      <Logo />
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12} md={6}>
          <CardPrincipal 
            formData={formData} 
            handleChange={handleChange} 
            handleSubmit={handleSubmit} 
            isRegister={false} 
          />
          <EnlaceRegistro isRegister={false} /> 
        </Col>
      </Row>
    </Container>
  );
}

export default IniciarSesion;
