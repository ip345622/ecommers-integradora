// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditarProducto = () => {
  const [productos, setProductos] = useState([]);
  const [editFormData, setEditFormData] = useState({
    idProducto: '',
    nombreProducto: '',
    descripcion: '',
    precio: '',
  });

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/productos');
      setProductos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditFormChange = (event) => {
    setEditFormData({
      ...editFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleEditFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const id   = editFormData.idProducto; 
      delete editFormData.idProducto; 
      await axios.put(`http://localhost:3000/api/productos/${id}`);
      fetchProductos();
      setEditFormData({
        idProducto: '',
        nombreProducto: '',
        descripcion: '',
        precio: '',
      });
    } catch (error) {
      console.log(error);
    }
  };
  

  const handleEditClick = (producto) => {
    setEditFormData({
      idProducto: producto.idProducto,
      nombreProducto: producto.nombreProducto,
      descripcion: producto.descripcion,
      precio: producto.precio,
    });
  };

  return (
    <div>
      <h1 className='text-center font-bold text-5xl mb-16'>Dashboard</h1>
      <table className="ml-[12%] border-4 w-[80%] text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.idProducto}>
              <td>{producto.nombreProducto}</td>
              <td>{producto.descripcion}</td>
              <td>{producto.precio}</td>
              <td>
                <button onClick={() => handleEditClick(producto)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Editar Producto</h2>
      <form onSubmit={handleEditFormSubmit} className='ml-[12%] w-[80%] mb-16'>
        <input
          type="hidden"
          name="idProducto"
          value={editFormData.idProducto}
          onChange={handleEditFormChange}
        />
        <label>
          Nombre:
          <input
            type="text"
            name="nombreProducto" // Changed the name to match the state property
            value={editFormData.nombreProducto}
            onChange={handleEditFormChange}
          />
        </label>
        <label>
          Descripción:
          <textarea
            name="descripcion"
            value={editFormData.descripcion}
            onChange={handleEditFormChange}
          ></textarea>
        </label>
        <label>
          Precio:
          <input
            type="text"
            name="precio"
            value={editFormData.precio}
            onChange={handleEditFormChange}
          />
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditarProducto;
