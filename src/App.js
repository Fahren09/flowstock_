import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./IniciarSesion";  
import Registro from "./Registro"; 
import MiCuenta from './MiCuenta';
import InventorySystem from "./SistemaDeInventario"; 
import Categorias from './Categoria';
//import Proveedores from './Proveedores';
//import Visitas from './Visitas';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/IniciarSesion" />} />
        <Route path="/IniciarSesion" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/SistemaDeinventario" element={<InventorySystem />} />
        <Route path="/MiCuenta" element={<MiCuenta/>} />
        <Route path="/Categoria" element={<Categorias />} />
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;
