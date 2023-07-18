import harina from '../../assets/img/products/harina.png'
import glicerina from '../../assets/img/products/glicerina.png'
import monin from '../../assets/img/products/monin.png'
import estrella from '../../assets/img/products/estrella.png'
import aromitalia from '../../assets/img/products/aromitalia.png'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ListaProductos = () =>{
    const [productos, setProductos] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };

    
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
        <div className='w-full '>
          <div className='grid grid-cols-4 ml-[5%]'>
          {productos.map((producto) => (
            <div key={producto.idProducto} className='mb-10'>
              <img src={estrella} alt={producto.nombreProducto} className='w-[60%]' />
              <h3 className='text-2xl font-bold'>{producto.nombreProducto}</h3>
              <p>{producto.descripcion}</p>
              <p>Existencia: {producto.existencia}</p>
              <p>Precio: {producto.precio}</p>
              <button className='bg-orange-500 rounded-2xl pl-3 pr-3' onClick={() => addToCart(producto)}>Agregar al carrito</button>

            </div>
          ))}
        </div>
        </div>
      );
      
}

