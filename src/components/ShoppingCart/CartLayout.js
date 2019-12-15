import React from "react";

export default function CartLayout() {
  return (
    <div className="container-fluid text-center d-none d-lg-block">
      <div className="row">
         {/* Products Heading */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Products</p>
        </div>
        {/* Title Heading */}
        <div className="col-10 col-lg-2">
          <p className="text-uppercase">Title</p>
        </div>
        {/* Price Heading */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Price</p>
        </div>
        {/* Quantity Heading */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Quantity</p>
        </div>
        {/* Remove Heading */}
        <div className="col-3 mx-auto col-lg-2">
          <p className="text-uppercase">Remove</p>
        </div>
        {/* Total Heading */}
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase">Total</p>
        </div>
      </div>
    </div>
  );
}
