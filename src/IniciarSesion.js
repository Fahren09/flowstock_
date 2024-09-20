// IniciarSesion.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/LogoFlowStock.png"; 
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container my-5">
      <nav style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
      </nav>

      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <h3 className="text-center mb-4">FlowStock - Iniciar Sesión</h3>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">Nombre de Usuario</label>
              <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-dark w-100">Iniciar Sesión</button>
          </form>

          <div className="text-center mt-3">
          <p>
              ¿Aun no tienes cuenta?{" "}
              <a href="/Registro" className="fw-bold text-dark">
                Registrate
              </a>
            </p>
          </div>
        </div>
      </div>

      <footer className="text-center mt-5">
        <p>&copy; 2024 FlowStock - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Login;
