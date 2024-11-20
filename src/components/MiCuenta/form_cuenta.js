import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';

const FormGroup = ({ label, name, value, onChange, editMode, type = "text", placeholder }) => (
  <Form.Group as={Row} className="mt-3">
    <Form.Label column sm={3}>{label}</Form.Label>
    <Col sm={9}>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        disabled={!editMode}
        placeholder={placeholder}
        style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
        className="me-2-principal"
      />
    </Col>
  </Form.Group>
);

export default FormGroup;
