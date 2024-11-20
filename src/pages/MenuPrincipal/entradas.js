import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Entradas() {
  const [entradas, setEntradas] = useState([
    { producto: 'Producto 1', cantidad: 10, pedido: 'Pedido 1', fecha: '2024-11-17' },
    { producto: 'Producto 2', cantidad: 5, pedido: 'Pedido 2', fecha: '2024-11-18' },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({ producto: '', cantidad: '', pedido: '', fecha: '' });

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...entradas[index] }); 
  };

  const handleSave = () => {
    const updatedEntradas = [...entradas];
    updatedEntradas[selectedIndex] = { ...updatedEntradas[selectedIndex], ...updatedFields };
    setEntradas(updatedEntradas);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedEntradas = entradas.filter((_, idx) => idx !== index);
    setEntradas(updatedEntradas);
  };

  const handleSubmit = () => {
    const nuevaEntrada = {
      ...updatedFields,
      fecha: new Date().toISOString().split('T')[0], // Fecha actual
    };

    setEntradas([...entradas, nuevaEntrada]);
    setUpdatedFields({ producto: '', cantidad: '', pedido: '' }); // Limpiar el formulario
  };

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nueva entrada</h5>
      <Forms 
        fields={[
          { id: 'producto', type: 'text', placeholder: 'Producto', value: updatedFields.producto, onChange: (val) => setUpdatedFields({ ...updatedFields, producto: val }) },
          { id: 'cantidad', type: 'number', placeholder: 'Cantidad', value: updatedFields.cantidad, onChange: (val) => setUpdatedFields({ ...updatedFields, cantidad: val }) },
          { id: 'pedido', type: 'text', placeholder: 'Pedido', value: updatedFields.pedido, onChange: (val) => setUpdatedFields({ ...updatedFields, pedido: val }) },
        ]}
        handleSubmit={handleSubmit}  // Aquí pasamos la función handleSubmit
        searchEnabled={true}
      />
      <List
        items={entradas}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        renderItem={(item) => (
          <>
            <strong>{item.producto}</strong> <br />
            <small>Fecha: {item.fecha}</small>
          </>
        )}
      />
      <EditModal
        show={modalShow}
        resetForm={() => setModalShow(false)}
        fields={[
          { id: 'producto', label: 'Producto', type: 'text', value: updatedFields.producto, onChange: (val) => setUpdatedFields({ ...updatedFields, producto: val }) },
          { id: 'cantidad', label: 'Cantidad', type: 'number', value: updatedFields.cantidad, onChange: (val) => setUpdatedFields({ ...updatedFields, cantidad: val }) },
          { id: 'pedido', label: 'Pedido', type: 'text', value: updatedFields.pedido, onChange: (val) => setUpdatedFields({ ...updatedFields, pedido: val }) },
        ]}
        handleSave={handleSave}
        modalTitle="Editar Entrada"
        saveButtonText="Actualizar"
      />
    </div>
  );
}

export default Entradas;
