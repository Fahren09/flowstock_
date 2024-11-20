import React from 'react';
import { Navbar, Container, Dropdown, Nav } from 'react-bootstrap';
import { FaBell, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TopNav = () => {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <Navbar expand="lg" style={{ backgroundColor: '#2D4076', color: '#0F8D89' }}>
      <Container fluid>
        <Navbar.Brand style={{ color: '#FEA099' }}>Sistema de Inventario</Navbar.Brand>
        <Nav className="ms-auto d-flex align-items-center">
          <FaBell className="me-3" style={{ cursor: 'pointer', color: '#70B69B' }} />
          <Dropdown className="me-3">
            <Dropdown.Toggle variant="transparent" style={{ color: '#70B69B' }}>
              <FaCog />
            </Dropdown.Toggle>
            <Dropdown.Menu style={{ backgroundColor: '#0F8D89' }}>
              <Dropdown.Item onClick={() => handleRedirect('/MiCuenta')}>Mi cuenta</Dropdown.Item>
              <Dropdown.Item onClick={() => handleRedirect('/IniciarSesion')}>Cerrar sesión</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div className="d-flex align-items-center me-4">
            <img src="https://via.placeholder.com/40" alt="Usuario" className="rounded-circle me-2" />
            <div className="text-end">
              <span style={{ color: '#FEA099' }}>Juan Pérez</span><br />
              <small style={{ color: '#FEA099' }}>Almacenista</small>
            </div>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopNav;
