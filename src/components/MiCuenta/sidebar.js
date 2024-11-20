import React from 'react';
import { Col } from 'react-bootstrap';
import logo from '../../assets/img/LogoFlowStock_6.png';


const Sidebar = () => (
  <Col xs={2} style={{ backgroundColor: '#232D47', color: '#0F8D89' }} className="p-3">
    <div className="d-flex align-items-center mb-4">
      <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
      <h4 className="fw-bold" style={{ color: '#FEA099' }}>FlowStock</h4>
    </div>
  </Col>
);

export default Sidebar;
