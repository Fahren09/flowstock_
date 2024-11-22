import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Reportes() {
  const [reportes, setReportes] = useState([
    { id: 1, fecha: '2024-10-01', tipo: 'entrada', producto: 'Producto A', usuario: 'Juan Pérez' },
    { id: 2, fecha: '2024-10-15', tipo: 'salida', producto: 'Producto B', usuario: 'Ana Gómez' },
  ]);
  
  // Filtros
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [usuarioFiltro, setUsuarioFiltro] = useState('');
  const [productoFiltro, setProductoFiltro] = useState('');

  // Función para filtrar los reportes
  const aplicarFiltros = () => {
    const filtrados = reportes.filter((reporte) => {
      const fechaCoincide = fechaFiltro ? reporte.fecha.includes(fechaFiltro) : true;
      const usuarioCoincide = usuarioFiltro ? reporte.usuario.includes(usuarioFiltro) : true;
      const productoCoincide = productoFiltro ? reporte.producto.includes(productoFiltro) : true;
      return fechaCoincide && usuarioCoincide && productoCoincide;
    });
    return filtrados;
  };

  // Mostrar reportes filtrados
  const reportesFiltrados = aplicarFiltros();

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fecha, setFecha] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFecha(reportesFiltrados[index].fecha);
    setModalShow(true);
  };

  const handleSave = () => {
    if (!fecha.trim()) return alert('Por favor ingrese una fecha.');

    const updatedReportes = [...reportes];
    if (selectedIndex !== null) {
      updatedReportes[selectedIndex] = { ...updatedReportes[selectedIndex], fecha };
      setSelectedIndex(null);
    } else {
      const nuevoReporte = { id: reportes.length + 1, fecha };
      updatedReportes.push(nuevoReporte);
    }

    setReportes(updatedReportes);
    resetForm();
  };

  const handleDelete = (index) => {
    const updatedReportes = reportes.filter((_, idx) => idx !== index);
    setReportes(updatedReportes);
  };

  const resetForm = () => {
    setFecha('');
    setSelectedIndex(null);
    setModalShow(false);
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar Reporte</h5>

      {/* Filtros */}
      <div style={{ marginBottom: '20px' }}>
        <Forms
          campos={[
            { 
              id: 'fechaFiltro', 
              tipo: 'date', 
              placeholder: 'Filtrar por Fecha', 
              valor: fechaFiltro, 
              enCambio: setFechaFiltro 
            },
            { 
              id: 'usuarioFiltro', 
              tipo: 'text', 
              placeholder: 'Filtrar por Usuario', 
              valor: usuarioFiltro, 
              enCambio: setUsuarioFiltro 
            },
            { 
              id: 'productoFiltro', 
              tipo: 'text', 
              placeholder: 'Filtrar por Producto', 
              valor: productoFiltro, 
              enCambio: setProductoFiltro 
            },
          ]}
          manejarEnvio={() => {}}
        />
      </div>

      {/* Mostrar los reportes filtrados */}
      <List
        items={reportesFiltrados}
        manejarEdicion={handleEdit}
        manejarEliminacion={handleDelete}
        renderizarItem={(item) => (
          <div>
            <strong>Fecha:</strong> {item.fecha} <br />
            <strong>Tipo:</strong> {item.tipo} <br />
            <strong>Producto:</strong> {item.producto} <br />
            <strong>Usuario:</strong> {item.usuario}
          </div>
        )}
      />

      {/* Modal de Edición */}
      <EditModal
        mostrar={modalShow}
        reiniciarFormulario={resetForm}
        campos={[
          { 
            id: 'fecha', 
            label: 'Fecha del Reporte', 
            tipo: 'date', 
            valor: fecha, 
            enCambio: (val) => setFecha(val) 
          },
        ]}
        manejarGuardar={handleSave}
        tituloModal="Editar Reporte"
        textoBotonGuardar="Actualizar"
      />
    </div>
  );
}

export default Reportes;
