
import React from 'react';
import { Card } from 'react-bootstrap';
import Formulario from './formulario';

const CardPrincipal = ({ formData, handleChange, handleSubmit, isRegister }) => {
  return (
    <Card className="p-4" style={{ backgroundColor: '#2D4076', color: '#C6F8CF' }}>
      <h3 className="text-center mb-4" style={{ color: '#FEA099' }}>
        {isRegister ? 'Registro de Usuario' : 'Iniciar Sesión'}
      </h3>
      <Formulario 
        formData={formData} 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        isRegister={isRegister} 
      />
    </Card>
  );
};

export default CardPrincipal;
