import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { ItemActions } from "../store/slices/ItemSlice";
const CartItem = ({ name, quantity, total, price, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button
        className="cart-actions"
        onClick={() => {
          dispatch(ItemActions.removeItem(id));
        }}
      >
        -
      </button>
      <button
        className="cart-actions"
        onClick={() => {
          dispatch(ItemActions.addItem({ id, name, price }));
        }}
      >
        +
      </button>
    </div>
  );
};

export default CartItem;
