// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Dashboard = () => {
  const [productos, setProductos] = useState([]);
  const [formData, setFormData] = useState({
    nombreProducto: '',
    descripcion: '',
    nombreImg:'',
    existencia: '',
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

  const handleSubmit = async () => {
        // Create new producto
        await axios.post('http://localhost:3000/api/productos', formData);
      fetchProductos();
      setFormData({
        nombreProducto: '',
        descripcion: '',
        nombreImg:'',
        existencia: '',
        precio: '',
      });
  };


  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <h1 className='text-center font-bold text-5xl mb-16'>Dashboard</h1>

      <h2 className='ml-[12%] text-3xl font-semibold mb-6'>Crear producto</h2>
      <form onSubmit={handleSubmit} className='ml-[12%] w-[80%] mb-16'>
        <input
          className=''
          type="hidden"
          name="idProductos"
          value={formData.idProductos}
          onChange={handleChange}
        />
        <label>
          Nombre del Producto:
          <input
            type="text"
            name="nombreProducto"
            value={formData.nombreProducto}
            onChange={handleChange}
          />
        </label>
        <label>
          Descripción:
          <input
          className=' h-10'
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          nombreImg:
          <input
            name="nombreImg"
            value={formData.nombreImg}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Existencia:
          <input
            type="number"
            name="existencia"
            value={formData.existencia}
            onChange={handleChange}
          />
        </label>
        <label>
          Precio:
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
          />
        </label>
        <input type="submit" name="" id="" className='rounded-full pl-3 pr-3 bg-orange-600'/>
      </form>
      <h2 className='ml-[12%] text-3xl font-semibold mb-4'>Ver productos</h2>
      <table className="ml-[12%] border-4 w-[80%] text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Nombre de la imagen</th>
            <th>Existencia</th>
            <th>Precio</th>
            <th>Fecha Creada</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.idProductos}>
              <td>{producto.nombreProducto}</td>
              <td>{producto.descripcion}</td>
              <th>{producto.nombreImg}</th>
              <td>{producto.existencia}</td>
              <td>{producto.precio}</td>
              <td>{producto.fechaCreada}</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

