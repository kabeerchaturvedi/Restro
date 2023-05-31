import React from "react";
import { useState } from "react";

const Cart = ()=> {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    };
  
    const removeFromCart = (item) => {
      const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
      setCartItems(updatedCart);
    };
  
    return (
      <div>
        <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => addToCart({ id: 1, name: 'Item 1' })}>Add Item 1</button>
        <button onClick={() => addToCart({ id: 2, name: 'Item 2' })}>Add Item 2</button>
      </div>
    );
  }


export default Cart;
