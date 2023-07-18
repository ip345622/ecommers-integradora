import { useEffect, useState } from 'react';
import ProductoDetalle from '../detallesproductos';
import axios from 'axios';

export const ListaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleClick = (product) => {
    setSelectedProduct(product);
  };

  const cerrarDetalle = () => {
    setSelectedProduct(null);
  };

  const agregarAlCarrito = (product) => {
    setCarrito([...carrito, product]);
  };

  const eliminarDelCarrito = (product) => {
    const updatedCarrito = carrito.filter((item) => item.idProducto !== product.idProducto);
    setCarrito(updatedCarrito);
  };

  return (
    <div className='w-full'>
      <div className='grid grid-cols-4 ml-[5%]'>
        {productos.map((producto) => (
          <div key={producto.idProducto} className='mb-10'>
            <img src={`http://localhost/images/${producto.nombreImg}`} alt={producto.nombreProducto} className='w-[60%]' onClick={() => handleClick(producto)} />
            <h3 className='text-2xl font-bold'>{producto.nombreProducto}</h3>
            <p>{producto.descripcion}</p>
            <p>Existencia: {producto.existencia}</p>
            <p>Precio: {producto.precio}</p>
            <button className='bg-orange-500 rounded-2xl pl-3 pr-3' onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductoDetalle product={selectedProduct} onClose={cerrarDetalle} />
      )}
      <div>
        <h2>Carrito de compras</h2>
        {carrito.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          carrito.map((product) => (
            <div key={product.idProducto}>
              <h3>{product.nombreProducto}</h3>
              <p>Precio: {product.precio}</p>
              <button onClick={() => eliminarDelCarrito(product)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
      
    </div>
  );
};
