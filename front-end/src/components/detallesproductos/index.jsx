import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductoDetalle = ({product, onClose}) => {
  // importar productos de la base de datos
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
        <div className='bg-orange-400 text-orange-50 absolute   ml-[4%] w-[80%] text-center p-24'>
            <button className='text-[4vh] absolute ml-[45%]' onClick={onClose}>X</button>
            <div key={product} className='flex justify-evenly mt-[10%]'>
        <img src={`http://localhost/images/${product.nombreImg}`} alt={product.nombreProducto} className='w-[20%]' />
        <div>
        <h3 className='text-5xl font-bold'>{product.nombreProducto}</h3>
        <p className='text-4xl'>{product.descripcion}</p>
        <p className='text-3xl'>Existencia: {product.existencia}</p>
        <p className='text-2xl'>Precio: {product.precio}</p>
        </div>
      </div>
        </div>
      );
}
export default ProductoDetalle;
