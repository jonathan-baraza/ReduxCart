import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ItemActions } from "../store/slices/ItemSlice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {
  const dispatch = useDispatch();
  const addProduct = () => {
    const newItem = {
      id: id,
      name: name,
      price: price,
    };

    dispatch(ItemActions.addItem(newItem));
  };

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addProduct}>Add to cart</button>
    </div>
  );
};

export default Product;
