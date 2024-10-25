import React, { useState } from 'react';
import { Container, Row, Col, Form, Nav, Tab, Navbar, Dropdown } from 'react-bootstrap';
import { FaBox, FaTruck, FaCubes, FaUserFriends, FaBell, FaCog, FaTags, FaClipboardList, FaShoppingCart, FaChartBar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Importar para redirección
import Entrada from './Entradas';
import Salida from './Salidas';
import Producto from './Productos';
import Pedido from './Pedidos';
import Reporte from './Reportes';
import logo from "./img/LogoFlowStock.png"; // Ajusta el path si es necesario
import './Estilo.css'; // Importa tu archivo CSS aquí

function InventorySystem() {
  const [activeTab, setActiveTab] = useState("entradas");
  const navigate = useNavigate(); // Inicializa useNavigate

  const handleSelect = (key) => {
    setActiveTab(key);
  };

  const handleRedirect = (path) => {
    navigate(path); // Redirige a la página especificada
  };

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col xs={2} style={{ backgroundColor: '#232D47', color: '#0F8D89' }} className="p-3">  
          <div className="d-flex align-items-center mb-4">
            <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
            <h4 className="fw-bold" style={{ color: '#FEA099' }}>FlowStock</h4>
          </div>

          <h4>Inventario</h4>
          <Nav defaultActiveKey="/entradas" className="flex-column">
            <Nav.Link href="/categoria" style={{ color: '#0F8D89' }}><FaTags className="me-2" />Categoría</Nav.Link>
            <Nav.Link href="/proveedores" style={{ color: '#0F8D89' }}><FaTruck className="me-2" />Proveedores</Nav.Link>
            <Nav.Link href="/visitas" style={{ color: '#0F8D89' }}><FaUserFriends className="me-2" />Visitas</Nav.Link>
          </Nav>
        </Col>

        <Col xs={10} className="p-4" style={{ backgroundColor: '#2D4076', color: '#0F8D89' }}>
          {/* Navbar */}
          <Navbar expand="lg" style={{ backgroundColor: '#2D4076', color: '#0F8D89' }} className="mb-3">
            <Container fluid>
              <Navbar.Brand style={{ color: '#FEA099' }}>Sistema de Inventario</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbar-content" />
              <Navbar.Collapse id="navbar-content">
                <Nav className="ms-auto d-flex align-items-center">

                  {/* Iconos de notificación y configuración */}
                  <FaBell className="me-3" style={{ cursor: 'pointer', color: '#70B69B' }} />

                <Dropdown className="me-3">
                    <Dropdown.Toggle variant="transparent" id="dropdown-basic" style={{ backgroundColor: 'transparent', border: 'none', color: '#70B69B' }}>
                      <FaCog style={{ cursor: 'pointer' }} />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => handleRedirect('/MiCuenta')}>Mi cuenta</Dropdown.Item>
                      <Dropdown.Item onClick={() => handleRedirect('/IniciarSesion')}>Cerrar sesión</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* Usuario */}
                  <div className="d-flex align-items-center me-4">
                    <img
                      src="https://via.placeholder.com/40" // URL temporal, reemplázala por la imagen real
                      alt="Usuario"
                      className="rounded-circle me-2"
                      style={{ width: '40px', height: '40px' }}
                    />
                    <div className="text-end">
                      <span style={{ color: '#FEA099' }}>Juan Pérez</span><br />
                      <small style={{ color: '#FEA099' }}>Almacenista</small>
                    </div>
                  </div>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          {/* Contenido de pestañas */}
          <Tab.Container activeKey={activeTab} onSelect={handleSelect}>
            <Nav variant="tabs" className="custom-tab-border">
              <Nav.Item>
                <Nav.Link 
                  eventKey="entradas" 
                  style={{ 
                    backgroundColor: activeTab === "entradas" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "entradas" ? '#232D47' : '#C6F8CF',  border: 'none' 
                  }}
                >
                  <FaBox className="me-2" style={{ color: activeTab === "entradas" ? '#232D47' : '#C6F8CF' }} />Entradas
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="salidas" 
                  style={{ 
                    backgroundColor: activeTab === "salidas" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "salidas" ? '#232D47' : '#C6F8CF',  border: 'none' 
                  }}
                >
                  <FaClipboardList className="me-2" style={{ color: activeTab === "salidas" ? '#232D47' : '#C6F8CF' }} />Salidas
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="productos" 
                  style={{ 
                    backgroundColor: activeTab === "productos" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "productos" ? '#232D47' : '#C6F8CF',  border: 'none' 
                  }}
                >
                  <FaCubes className="me-2" style={{ color: activeTab === "productos" ? '#232D47' : '#C6F8CF' }} />Productos
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="pedidos" 
                  style={{ 
                    backgroundColor: activeTab === "pedidos" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "pedidos" ? '#232D47' : '#C6F8CF',  border: 'none' 
                  }}
                >
                  <FaShoppingCart className="me-2" style={{ color: activeTab === "pedidos" ? '#232D47' : '#C6F8CF' }} />Pedidos
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link 
                  eventKey="reportes" 
                  style={{ 
                    backgroundColor: activeTab === "reportes" ? '#C6F8CF' : 'transparent', 
                    color: activeTab === "reportes" ? '#232D47' : '#C6F8CF',  border: 'none' 
                  }}
                >
                  <FaChartBar className="me-2" style={{ color: activeTab === "reportes" ? '#232D47' : '#C6F8CF' }} />Reportes
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="entradas">
                <Entrada />
              </Tab.Pane>
              <Tab.Pane eventKey="salidas">
                <Salida />
              </Tab.Pane>
              <Tab.Pane eventKey="productos">
                <Producto />
              </Tab.Pane>
              <Tab.Pane eventKey="pedidos">
                <Pedido />
              </Tab.Pane>
              <Tab.Pane eventKey="reportes">
                <Reporte />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default InventorySystem;
