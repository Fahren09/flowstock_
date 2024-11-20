import React from 'react';
import { Link } from 'react-router-dom';

const EnlaceRegistro = ({ isRegister }) => {
  return (
    <div className="text-center mt-4">
      <p style={{ color: '#C6F8CF' }}>
        {isRegister ? (
          <>
            ¿Ya tienes cuenta? 
            <Link to="/IniciarSesion" style={{ color: '#FEA099' }}> Iniciar sesión</Link>
          </>
        ) : (
          <>
            ¿No tienes cuenta? 
            <Link to="/Registro" style={{ color: '#FEA099' }}> Regístrate</Link>
          </>
        )}
      </p>
    </div>
  );
};

export default EnlaceRegistro;
