import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideNav from '../components/SistemaDeInventario/side_nav'; 
import TopNav from '../components/SistemaDeInventario/top_nav';
import TabContentComponent from '../components/SistemaDeInventario/contenido'; 

function SistemaDeInventario() {
  const [activeTab, setActiveTab] = useState("entradas");  

  return (
    <Container fluid>
      <Row className="vh-100">
        <Col xs={2}>
          <SideNav setActiveTab={setActiveTab} activeTab={activeTab} />
        </Col>
        <Col xs={10}>
          <TopNav />
          <TabContentComponent activeTab={activeTab} setActiveTab={setActiveTab} />
        </Col>
      </Row>
    </Container>
  );
}

export default SistemaDeInventario;
