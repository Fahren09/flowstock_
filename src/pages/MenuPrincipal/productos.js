import React, { useState } from 'react';
import Forms from '../../components/principal/forms';
import List from '../../components/principal/list';
import EditModal from '../../components/principal/modal';

function Productos() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'Laptop',
      descripcion: 'Laptop de alta gama',
      stock: 10,
      categoria: 'Electrónica',
      estado: 'Activo',
      fecha_creacion: '2023-06-10',
    },
    {
      id: 2,
      nombre: 'Escritorio',
      descripcion: 'Escritorio de madera',
      stock: 5,
      categoria: 'Muebles',
      estado: 'Activo',
      fecha_creacion: '2023-06-11',
    },
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [updatedFields, setUpdatedFields] = useState({
    nombre: '',
    descripcion: '',
    stock: '',
    categoria: '',
    estado: 'Activo',
  });

  const categorias = ['Electrónica', 'Muebles', 'Ropa', 'Juguetes', 'Alimentos'];

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setModalShow(true);
    setUpdatedFields({ ...productos[index] }); // Cargar los datos del producto seleccionado
  };

  const handleSave = () => {
    const updatedProductos = [...productos];
    updatedProductos[selectedIndex] = { ...updatedProductos[selectedIndex], ...updatedFields };
    setProductos(updatedProductos);
    setModalShow(false);
  };

  const handleDelete = (index) => {
    const updatedProductos = productos.filter((_, idx) => idx !== index);
    setProductos(updatedProductos);
  };

  const handleSubmit = () => {
    const nuevoProducto = {
      ...updatedFields,
      id: productos.length + 1,
      fecha_creacion: new Date().toISOString().split('T')[0],
    };
    setProductos([...productos, nuevoProducto]);
    setUpdatedFields({
      nombre: '',
      descripcion: '',
      stock: '',
      categoria: '',
      estado: 'Activo',
    }); // Limpiar el formulario
  };


  return (
    <div>
      <h5 style={{ color: '#C6F8CF' }}>Registrar nuevo producto</h5>
      <Forms
        fields={[
          { id: 'nombre', type: 'text', placeholder: 'Nombre del producto', value: updatedFields.nombre, onChange: (val) => setUpdatedFields({ ...updatedFields, nombre: val }) },
          { id: 'descripcion', type: 'textarea', placeholder: 'Descripción del producto', value: updatedFields.descripcion, onChange: (val) => setUpdatedFields({ ...updatedFields, descripcion: val }) },
          { id: 'stock', type: 'number', placeholder: 'Cantidad en stock', value: updatedFields.stock, onChange: (val) => setUpdatedFields({ ...updatedFields, stock: val }) },
          {
            id: 'categoria',
            type: 'select',
            placeholder: 'Categoría',
            options: categorias,
            value: updatedFields.categoria,
            onChange: (val) => setUpdatedFields({ ...updatedFields, categoria: val }),
          },
        ]}
        handleSubmit={handleSubmit}
        searchEnabled={true}
      />
      <List
        items={productos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        renderItem={(item) => (
          <>
            <strong>{item.nombre}</strong> <br />
            <small>Descripción: {item.descripcion}</small> <br />
            <small>Stock: {item.stock}</small> <br />
            <small>Categoría: {item.categoria}</small> <br />
            <small>Estado: {item.estado}</small> <br />
            <small>Fecha de creación: {item.fecha_creacion}</small>
          </>
        )}
      />
      <EditModal
        show={modalShow}
        resetForm={() => setModalShow(false)}
        fields={[
          { id: 'nombre', label: 'Nombre', type: 'text', value: updatedFields.nombre, onChange: (val) => setUpdatedFields({ ...updatedFields, nombre: val }) },
          { id: 'descripcion', label: 'Descripción', type: 'textarea', value: updatedFields.descripcion, onChange: (val) => setUpdatedFields({ ...updatedFields, descripcion: val }) },
          { id: 'stock', label: 'Stock', type: 'number', value: updatedFields.stock, onChange: (val) => setUpdatedFields({ ...updatedFields, stock: val }) },
          {
            id: 'categoria',
            label: 'Categoría',
            type: 'select',
            options: categorias,
            value: updatedFields.categoria,
            onChange: (val) => setUpdatedFields({ ...updatedFields, categoria: val }),
          },
        ]}
        handleSave={handleSave}
        modalTitle="Editar Producto"
        saveButtonText="Actualizar"
      />
    </div>
  );
}

export default Productos;
