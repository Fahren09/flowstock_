import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Reportes() {
  const [reportes, setReportes] = useState([
    { id: 1, fecha: '2024-10-01' },
    { id: 2, fecha: '2024-10-15' },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [fecha, setFecha] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setFecha(reportes[index].fecha);
    setModalShow(true);
  };

  const handleSave = () => {
    if (!fecha.trim()) return alert('Por favor ingrese una fecha.');

    const updatedReportes = [...reportes];
    if (selectedIndex !== null) {
      // Actualizar reporte existente
      updatedReportes[selectedIndex] = { ...updatedReportes[selectedIndex], fecha };
      setSelectedIndex(null);
    } else {
      // Agregar nuevo reporte
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
      <Forms
        fields={[
          { 
            id: 'fecha', 
            type: 'date', 
            placeholder: 'Fecha del Reporte', 
            value: fecha, 
            onChange: setFecha 
          },
        ]}
        handleSubmit={handleSave}
      />
      <List
        items={reportes}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        renderItem={(item) => (
          <div>
            <strong>Fecha:</strong> {item.fecha}
          </div>
        )}
      />

      {/* Modal de Edición */}
      <EditModal
        show={modalShow}
        resetForm={resetForm}
        fields={[
          { 
            id: 'fecha', 
            label: 'Fecha del Reporte', 
            type: 'date', 
            value: fecha, 
            onChange: (val) => setFecha(val) 
          },
        ]}
        handleSave={handleSave}
        modalTitle="Editar Reporte"
        saveButtonText="Actualizar"
      />
    </div>
  );
}

export default Reportes;
