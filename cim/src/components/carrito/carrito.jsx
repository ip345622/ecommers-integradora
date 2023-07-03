// import ListadoProductos from "../../components/listadoProductos";
import { useState } from "react";


const Cart = () => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems([...items, product]);
  };

  const removeFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Carrito de Compras</h2>
      {items.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <h3 className="text-xl font-bold mb-2">Productos Disponibles</h3>
        <ul className="list-disc list-inside">
          <li className="flex justify-between items-center mb-2">
            <span>Producto 1</span>
            <button
              onClick={() => addToCart({ name: 'Producto 1' })}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar al Carrito
            </button>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span>Producto 2</span>
            <button
              onClick={() => addToCart({ name: 'Producto 2' })}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar al Carrito
            </button>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span>Producto 3</span>
            <button
              onClick={() => addToCart({ name: 'Producto 3' })}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar al Carrito
            </button>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span>Producto 4</span>
            <button
              onClick={() => addToCart({ name: 'Producto 4' })}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar al Carrito
            </button>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span>Producto 5</span>
            <button
              onClick={() => addToCart({ name: 'Producto 5' })}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar al Carrito
            </button>
          </li>
          <li className="flex justify-between items-center mb-2">
            <span>Producto 6</span>
            <button
              onClick={() => addToCart({ name: 'Producto 6' })}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Agregar al Carrito
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;