import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export default function CartItem({ item, value }) {
  const { id, title, image, price, total, count, stock } = item;
  const { increment, decrement, removeItem } = value;
  const options = ["UK 4", "UK 4.5", "UK 5", "UK 5.5", "UK 6", "UK 6.5", "UK 7", "UK 7.5", "UK 8", "UK 8.5", "UK 9"];
  const defaultOption = options[0];
  return (
    <div className="row my-1 text-capitalize text-center">
      {/* Image */}
      <div className="col-10 mx-auto mb-2 col-lg-2">
        <img
          src={image}
          style={{ width: "8rem", height: "10rem" }}
          className="img-fluid"
          alt="product"
        ></img>
      </div>
      {/* Product and Size */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span> {title}
        <div className="col-3 mx-auto mt-3 mb-2 col-lg-7"> Size
          <Dropdown  options={options} value={defaultOption} />
        </div>
      </div>
      {/* Price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>£{price}
      </div>
      {/* Quantity */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span className="btn button-black mx-1" onClick={() => decrement(id)}>
            -
          </span>
          <span className="btn button-none mx-1 font">{count}</span>
          <span className="btn button-black mx-1" onClick={() => increment(id)}>
            +
          </span>
        </div>
      </div>
      {/* Remove Item */}
      <div className="col-3 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => removeItem(id)}>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
      {/* Total */}
      <div className="col-10 mx-auto col-lg-2 mb-3">
        <strong>Item total: £{parseFloat(total).toFixed(2)}</strong>
      </div>
    </div>
  );
}
