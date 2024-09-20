import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./IniciarSesion";  
import Registro from "./Registro"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/IniciarSesion" />} />
        <Route path="/IniciarSesion" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        {/* Puedes agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}

export default App;