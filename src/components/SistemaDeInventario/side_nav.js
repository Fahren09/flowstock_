import React from 'react';
import { Nav, Tab } from 'react-bootstrap'; 
import { FaTags, FaTruck, FaUsers } from 'react-icons/fa';
import logo from "../../assets/img/LogoFlowStock_6.png";


const SideNav = ({ setActiveTab, activeTab }) => (
  <div style={{ backgroundColor: '#232D47', color: '#0F8D89', padding: '1rem' }}>
    <div className="d-flex align-items-center mb-4">
      <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
      <h4 style={{ color: '#FEA099' }}>FlowStock</h4>
    </div>

    <h4>Inventario</h4>

    <Nav className="flex-column">
      <Nav.Link
        onClick={() => setActiveTab('categoria')}
        style={{ color: '#0F8D89' }}
      >
        <FaTags className="me-2" />Categoría
      </Nav.Link>
      <Nav.Link
        onClick={() => setActiveTab('proveedores')}
        style={{ color: '#0F8D89' }}
      >
        <FaTruck className="me-2" />Proveedores
      </Nav.Link>
      <Nav.Link
        onClick={() => setActiveTab('clientes')}
        style={{ color: '#0F8D89' }}
      >
        <FaUsers className="me-2" />Clientes
      </Nav.Link>
    </Nav>

    

  </div>
);

export default SideNav;
