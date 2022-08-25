import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
const CartItems = () => {
  const allProducts = useSelector((state) => state.items.allItems);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {allProducts &&
          allProducts.map((product) => (
            <li key={product.id}>
              <CartItem
                id={product.id}
                price={product.price}
                name={product.name}
                quantity={product.quantity}
                total={product.total}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CartItems;
