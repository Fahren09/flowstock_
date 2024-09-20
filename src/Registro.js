import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./img/LogoFlowStock.png"; // Ajusta el path si es necesario

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "Empleado",
    userImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, userImage: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container my-5">
      {/* Navbar/Encabezado */}
      <nav style={{ position: 'absolute', top: '10px', left: '10px' }}>
  <img src={logo} alt="FlowStock" style={{ width: "80px" }} />
</nav>


      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          {/* Formulario de registro */}
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <h3 className="text-center mb-4">FlowStock - Registro</h3>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Nombre de Usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userImage" className="form-label">
                Imagen de Usuario
              </label>
              <input
                type="file"
                className="form-control"
                id="userImage"
                onChange={handleImageChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="userType" className="form-label">
                Tipo de Usuario
              </label>
              <select
                className="form-select"
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="Empleado">Empleado</option>
                <option value="Administrador">Administrador</option>
              </select>
            </div>

            <button type="submit" className="btn btn-dark w-100">
              Registrar
            </button>
          </form>

          {/* Pregunta si ya tiene cuenta */}
          <div className="text-center mt-3">
            <p>
              ¿Ya tienes cuenta?{" "}
              <a href="/IniciarSesion" className="fw-bold text-dark">
                Iniciar sesión
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-5">
        <p>&copy; 2024 FlowStock - Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Register;
