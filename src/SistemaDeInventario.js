// src/components/InventorySystem.js
import React from 'react';
import { Container, Row, Col, Form, Nav, Tab } from 'react-bootstrap';
import { FaBox, FaTruck, FaCubes, FaUserFriends, FaMapMarkerAlt, FaBell, FaCog } from 'react-icons/fa';
import Entrada from './Entradas';
import logo from "./img/LogoFlowStock.png"; // Ajusta el path si es necesario


function InventorySystem() {
  return (
    <Container fluid>
      <Row className="vh-100">
        <Col xs={2} className="bg-light p-3">
        {/* Logo y texto de FlowStock */}
          <div className="d-flex align-items-center mb-4">
            {/*<Image src="LogoFlowStock.png" alt="Logo FlowStock" width={40} height={40} className="me-2" />*/}
            <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
            <h4 className="fw-bold">FlowStock</h4>
          </div>

          <h4>Inventario</h4>
          <Nav defaultActiveKey="/entradas" className="flex-column">
            <Nav.Link href="/entradas"><FaBox className="me-2" />Entradas</Nav.Link>
            <Nav.Link href="/salidas"><FaTruck className="me-2" />Salidas</Nav.Link>
            <Nav.Link href="/productos"><FaCubes className="me-2" />Productos</Nav.Link>
            <Nav.Link href="/visitas"><FaUserFriends className="me-2" />Visitas de Proveedores</Nav.Link>
            <Nav.Link href="/direcciones"><FaMapMarkerAlt className="me-2" />Direcciones</Nav.Link>
          </Nav>
        </Col>

        <Col xs={10} className="p-4">
          <h4>Sistema de Inventario</h4>
          <Row className="mb-3">
            <Col xs={9}>
              <Form.Control type="text" placeholder="Buscar..." />
            </Col>
            <Col xs={3} className="text-end">
              <div className="d-flex justify-content-end align-items-center">
                {/* Foto de usuario */}
                <img
                  src="https://via.placeholder.com/40" // URL temporal, reemplázala por la imagen real
                  alt="Usuario"
                  className="rounded-circle me-2"
                  style={{ width: '40px', height: '40px' }}
                />
                <div className="me-3 text-end">
                  <span>Juan Pérez</span><br />
                  <small>Almacenista</small>
                </div>
                {/* Botones de campana y configuración */}
                <FaBell className="me-3" style={{ cursor: 'pointer' }} />
                <FaCog style={{ cursor: 'pointer' }} />
              </div>
            </Col>
          </Row>
          <Tab.Container defaultActiveKey="entradas">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="entradas"><FaBox className="me-2" />Entradas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="salidas"><FaTruck className="me-2" />Salidas</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="productos"><FaCubes className="me-2" />Productos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="visitas"><FaUserFriends className="me-2" />Visitas de Proveedores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="direcciones"><FaMapMarkerAlt className="me-2" />Direcciones</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="mt-3">
              <Tab.Pane eventKey="entradas">
                <Entrada />
              </Tab.Pane>
              {/* Más pestañas si es necesario */}
            </Tab.Content>
          </Tab.Container>
        </Col>
      </Row>
    </Container>
  );
}

export default InventorySystem;
