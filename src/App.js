import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import IniciarSesion from "./pages/iniciar_sesion";  
import Registro from "./pages/registro"; 
import MiCuenta from "./pages/mi_cuenta";
import SistemaDeInventario from "./pages/sistema_de_inventario"; 
import './styles/App.css';



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/iniciar_sesion" />} />
        <Route path="/iniciar_sesion" element={<IniciarSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/sistema_de_inventario" element={<SistemaDeInventario />} />
        <Route path="/mi_cuenta" element={<MiCuenta />} />
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
