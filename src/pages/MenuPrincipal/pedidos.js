import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Pedidos() {
  const [pedidos, setPedidos] = useState([
    { tipo: 'Envio', empresa: 'Empresa A', fechaCreacion: '2023-10-01', fechaLlegada: '2023-10-10', estado: 'Pendiente' },
    { tipo: 'Llegada', empresa: 'Empresa B', fechaCreacion: '2023-10-05', fechaLlegada: '2023-10-12', estado: 'Completado' },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({ tipo: '', empresa: '', fechaLlegada: '', estado: '' });
  const empresas = ['Empresa A', 'Empresa B', 'Empresa C', 'Empresa D'];
 
  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...pedidos[index] });
  };

  const handleSave = () => {
    const updatedPedidos = [...pedidos];
    updatedPedidos[selectedIndex] = { ...updatedPedidos[selectedIndex], ...updatedFields };
    setPedidos(updatedPedidos);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedPedidos = pedidos.filter((_, idx) => idx !== index);
    setPedidos(updatedPedidos);
  };

  const handleSubmit = () => {
    const nuevoPedido = { 
      ...updatedFields, 
      fechaCreacion: new Date().toISOString().split('T')[0] 
    };
    setPedidos([...pedidos, nuevoPedido]);
    setUpdatedFields({ tipo: '', empresa: '', fechaLlegada: '', estado: '' }); // Limpia el formulario
  };
  

  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nuevo pedido</h5>
      <Forms 
        fields={[
          { id: 'tipo', type: 'select', placeholder: 'Tipo', value: updatedFields.tipo, onChange: (val) => setUpdatedFields({ ...updatedFields, tipo: val }), options: ['Envio', 'Llegada'] },
          { id: 'empresa', type: 'select', placeholder: 'Empresa', value: updatedFields.empresa, onChange: (val) => setUpdatedFields({ ...updatedFields, empresa: val }), options: empresas },
          { id: 'fechaLlegada', type: 'date', placeholder: 'Fecha de Llegada', value: updatedFields.fechaLlegada, onChange: (val) => setUpdatedFields({ ...updatedFields, fechaLlegada: val }) },
        ]}
        handleSubmit={handleSubmit}
        searchEnabled={true}
      />
      <List
        items={pedidos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        renderItem={(item) => (
          <>
            <strong>{item.tipo}</strong> <br />
            <small>Empresa: {item.empresa}</small> <br />
            <small>Fecha de creación: {item.fechaCreacion}</small> <br />
            <small>Fecha de llegada: {item.fechaLlegada}</small> <br />
            <small>Estado: {item.estado}</small>
          </>
        )}
      />
      <EditModal
        show={modalShow}
        resetForm={() => setModalShow(false)}
        fields={[
          { id: 'tipo', label: 'Tipo', type: 'select', value: updatedFields.tipo, onChange: (val) => setUpdatedFields({ ...updatedFields, tipo: val }), options: ['Envio', 'Llegada'] },
          { id: 'empresa', label: 'Empresa', type: 'select', value: updatedFields.empresa, onChange: (val) => setUpdatedFields({ ...updatedFields, empresa: val }), options: empresas },
          { id: 'fechaLlegada', label: 'Fecha de Llegada', type: 'date', value: updatedFields.fechaLlegada, onChange: (val) => setUpdatedFields({ ...updatedFields, fechaLlegada: val }) },
        ]}
        handleSave={handleSave}
        modalTitle="Editar Pedido"
        saveButtonText="Actualizar"
      />
    </div>
  );
}

export default Pedidos;
