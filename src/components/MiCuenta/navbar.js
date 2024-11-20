import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { FaBell, FaCog } from 'react-icons/fa';

const CustomNavbar = ({ userName, userRole, onRedirect }) => (
  <Navbar
    expand="lg"
    className="d-flex justify-content-between align-items-center px-3"
    style={{
      backgroundColor: '#232D47',
      color: '#0F8D89',
      height: '100px',
      width: '100%', 
    }}
  >
    <Navbar.Brand style={{ color: '#FEA099' }}>Mi Cuenta</Navbar.Brand>
    <Nav className="d-flex align-items-center">
      <FaBell className="me-3" style={{ cursor: 'pointer', color: '#70B69B' }} />
      <Dropdown>
        <Dropdown.Toggle
          variant="transparent"
          id="dropdown-basic"
          style={{ backgroundColor: 'transparent', border: 'none', color: '#70B69B' }}
        >
          <FaCog style={{ cursor: 'pointer' }} />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ backgroundColor: '#0F8D89' }}>
          <Dropdown.Item onClick={() => onRedirect('./pages/SistemaDeInventario')} style={{ color: '#C6F8CF' }}>
            Volver al inventario
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onRedirect('../pages/IniciarSesion')} style={{ color: '#C6F8CF' }}>
            Cerrar sesión
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <div className="d-flex align-items-center ms-3">
        <img
          src="https://via.placeholder.com/40"
          alt="Usuario"
          className="rounded-circle"
          style={{ width: '40px', height: '40px' }}
        />
        <div className="text-end ms-2">
          <span style={{ color: '#FEA099' }}>{userName}</span><br />
          <small style={{ color: '#FEA099' }}>{userRole}</small>
        </div>
      </div>
    </Nav>
  </Navbar>
);

export default CustomNavbar;
