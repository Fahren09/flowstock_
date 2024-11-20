import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Salida() {
  const [salidas, setSalidas] = useState([
    { producto: 'Laptop', cantidad: 5, fecha: '2023-06-12', tipoPedido: 'envio', socioEmpresa: 'Empresa XYZ', estado: 'pendiente' },
    { producto: 'Escritorio', cantidad: 2, fecha: '2023-06-13', tipoPedido: 'envio', socioEmpresa: 'Empresa ABC', estado: 'completado' },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({ producto: '', cantidad: '', pedido: '', fecha: '' });

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...salidas[index] });  // Cargar los datos del item seleccionado
  };

  const handleSave = () => {
    const updatedSalidas = [...salidas];
    updatedSalidas[selectedIndex] = { ...updatedSalidas[selectedIndex], ...updatedFields };
    setSalidas(updatedSalidas);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedSalidas = salidas.filter((_, idx) => idx !== index);
    setSalidas(updatedSalidas);
  };

  const handleSubmit = () => {
    const nuevaSalida = {
      ...updatedFields,
      fecha: new Date().toISOString().split('T')[0], // Fecha actual
      tipoPedido: 'envio', // Valor por defecto
      socioEmpresa: 'Empresa Desconocida', // Valor por defecto
      estado: 'pendiente', // Valor por defecto
    };
  
    setSalidas([...salidas, nuevaSalida]);
    setUpdatedFields({ producto: '', cantidad: '', pedido: '' }); // Limpiar formulario
  };
  
  

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nueva salida</h5>
      <Forms 
      fields={[
    { id: 'producto', type: 'text', placeholder: 'Producto', value: updatedFields.producto, onChange: (val) => setUpdatedFields({ ...updatedFields, producto: val }) },
    { id: 'cantidad', type: 'number', placeholder: 'Cantidad', value: updatedFields.cantidad, onChange: (val) => setUpdatedFields({ ...updatedFields, cantidad: val }) },
    { id: 'pedido', type: 'text', placeholder: 'Pedido', value: updatedFields.pedido, onChange: (val) => setUpdatedFields({ ...updatedFields, pedido: val }) },
  ]}
        handleSubmit={handleSubmit}
        searchEnabled={true}
      />

      <List
        items={salidas}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        renderItem={(item) => (
          <>
            <strong>{item.producto}</strong> <br />
            <small>Fecha: {item.fecha}</small> <br />
            <small>Tipo: {item.tipoPedido}</small> <br />
            <small>Socio/Empresa: {item.socioEmpresa}</small> <br />
            <small>Cantidad: {item.cantidad}</small> <br />
            <small>Estado: {item.estado}</small> 
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
        modalTitle="Editar Salida"
        saveButtonText="Actualizar"
      />
    </div>
  );
}

export default Salida;
