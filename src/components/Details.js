import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            brand,
            image,
            info,
            price,
            title,
            inCart,
            stock,
            colour
          } = value.detailProduct;
          return (
            <div className="container py-3">
              {/* Title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text- my-4">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* Product Image */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={image} className="img-fluid" alt="product"></img>
                </div>
                {/* Product Description */}
                <div className="col-10 mx-auto col-md-4 my-3">
                  <h4 className="text-title text-uppercase text-muted mt-4 mb-2">
                    Brand: <span className="text-uppercase">{brand}</span>
                  </h4>
                  <h4 className="text-darkRed">
                    <strong>
                      Price: <span>£</span>
                      {price}
                    </strong>
                  </h4>
                  <h4 className="text-capitalize text-muted lead mt-3">
                    Colour: <span>{colour}</span>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-5 mb-0">
                    Details{" "}
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/products">
                      <ButtonContainer>Back</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={stock === 0 ? true : inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                        value.decreaseStock(id);
                      }}
                    >
                      {stock === 0
                        ? "Out of stock"
                        : inCart
                        ? "In Cart"
                        : "Purchase"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
