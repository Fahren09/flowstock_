import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ formData, handleChange, handleSubmit, isRegister }) => {
  return (
    <Form onSubmit={handleSubmit}>
      {isRegister && (
        <Form.Group controlId="formNombre" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Ingresa tu nombre"
            name="nombre" 
            value={formData.nombre} 
            onChange={handleChange}
            className="me-2-principal"
            required
            style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
          />
        </Form.Group>
      )}

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Correo Electrónico</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Ingresa tu correo electrónico"
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          className="me-2-principal"
          required
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
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
          className="me-2-principal"
          required
          style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
        />
      </Form.Group>

      {isRegister && (
        <>
          <Form.Group controlId="formFoto" className="mb-3">
            <Form.Label>Foto de Usuario</Form.Label>
            <Form.Control 
              type="file" 
              name="foto"
              onChange={handleChange}
              accept="image/*"
              className="me-2-principal"
              style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
            />
          </Form.Group>

          <Form.Group controlId="formTipo" className="mb-3">
            <Form.Label>Tipo de Usuario</Form.Label>
            <Form.Select 
              name="tipo" 
              value={formData.tipo} 
              onChange={handleChange}
              className="me-2-principal"
              style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}
            >
              <option value="administrador">Administrador</option>
              <option value="empleado">Empleado</option>
            </Form.Select>
          </Form.Group>
        </>
      )}

      <div className="text-center">
        <Button variant="primary" type="submit" style={{ backgroundColor: '#C6F8CF', color: '#232D47', border: 'none' }}>
          {isRegister ? 'Registrar' : 'Iniciar Sesión'}
        </Button>
      </div>
    </Form>
  );
};

export default Formulario;
