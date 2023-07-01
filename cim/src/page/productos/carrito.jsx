import ListadoProductos from "../../components/listadoProductos";
import { useState, useEffect } from "react";
import React from "react";

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
  
    const cartStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '20px',
    };
  
    const cartItemsStyle = {
      width: '50%',
    };
  
    const productListStyle = {
      width: '50%',
    };
  
    const listItemStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    };
  
    const buttonStyle = {
      padding: '5px 10px',
      backgroundColor: '#333',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
    };
  
    return (
      <div style={cartStyle}>
        <h2>Carrito de Compras</h2>
        <div style={cartItemsStyle}>
          {items.length === 0 ? (
            <p>No hay productos en el carrito.</p>
          ) : (
            <ul>
              {items.map((item, index) => (
                <li key={index} style={listItemStyle}>
                  <span>{item.name}</span>
                  <button onClick={() => removeFromCart(index)} style={buttonStyle}>
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div style={productListStyle}>
          <h3>Productos Disponibles</h3>
          <ul>
            <li style={listItemStyle}>
              <span>Producto 1</span>
              <button onClick={() => addToCart({ name: 'Producto 1' })} style={buttonStyle}>
                Agregar al Carrito
              </button>
            </li>
            <li style={listItemStyle}>
              <span>Producto 2</span>
              <button onClick={() => addToCart({ name: 'Producto 2' })} style={buttonStyle}>
                Agregar al Carrito
              </button>
            </li>
            <li style={listItemStyle}>
              <span>Producto 3</span>
              <button onClick={() => addToCart({ name: 'Producto 3' })} style={buttonStyle}>
                Agregar al Carrito
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Cart;