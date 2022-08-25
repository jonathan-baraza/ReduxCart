import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { ItemActions } from "../store/slices/ItemSlice";
const Cart = () => {
  const allItems = useSelector((state) => state.items.allItems);
  const dispatch = useDispatch();
  return (
    <div
      className="cartIcon"
      onClick={() => {
        dispatch(ItemActions.toggleShowCart());
      }}
    >
      <h3>Cart: {allItems.length} Items</h3>
    </div>
  );
};

export default Cart;
