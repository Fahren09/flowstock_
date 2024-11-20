import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

function Formularios({ 
  campos = [], 
  manejarEnvio,  
  busquedaHabilitada, 
  valorBusqueda,   
  enCambioBusqueda,
}) {
  return (
    <>
      {busquedaHabilitada && (
        <Col xs={9} className="mb-3">
          <Form.Control 
            type="text" 
            placeholder="Buscar..." 
            value={valorBusqueda}
            onChange={(e) => enCambioBusqueda && enCambioBusqueda(e.target.value)}
            style={{ backgroundColor: '#2D4076', borderColor: '#C6F8CF', color: '#C6F8CF' }} 
            className="search-input"
          />
        </Col>
      )}
      <Form className="d-flex mb-3 mt-3">
        {campos.map((campo) => (
          campo.tipo === 'select' ? (
            <Form.Select
              key={campo.id}
              value={campo.valor}
              onChange={(e) => campo.enCambio(e.target.value)}
              style={{ 
                backgroundColor: '#2D4076', 
                color: '#C6F8CF', 
                marginRight: '15px' 
              }}
              className="me-2-principal"
            >
              {campo.opciones.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </Form.Select>
          ) : (
            <Form.Control
              key={campo.id}
              type={campo.tipo}
              placeholder={campo.placeholder}
              value={campo.valor}
              onChange={(e) => campo.enCambio(e.target.value)}
              style={{ 
                backgroundColor: '#2D4076', 
                color: '#C6F8CF', 
                marginRight: '15px' 
              }}
              className="me-2-principal"
            />
          )
        ))}
        <Button 
          variant="dark" 
          onClick={manejarEnvio} 
          style={{ backgroundColor: '#232D47', color: '#C6F8CF' }}
        >
          <FaPlus style={{ marginRight: '5px' }} /> Agregar
        </Button>
      </Form>
    </>
  );
}

export default Formularios;
