import harina from '../../assets/img/products/harina.png'
import glicerina from '../../assets/img/products/glicerina.png'
import monin from '../../assets/img/products/monin.png'
import estrella from '../../assets/img/products/estrella.png'
import aromitalia from '../../assets/img/products/aromitalia.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListaProductos = () =>{
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/productos');
            setProductos(response.data);
          } catch (error) {
            console.log(error);
          }
        };
      
        fetchData();
      }, []);
      
      return (
        <div>
          {productos.map((producto) => (
            <div key={producto.idProducto}>
              <h3>{producto.nombreProducto}</h3>
              <img src={estrella} alt={producto.nombreProducto} />
              <p>{producto.descripcion}</p>
              <p>Existencia: {producto.existencia}</p>
              <p>Precio: {producto.precio}</p>
            </div>
          ))}
        </div>
      );
      
}

