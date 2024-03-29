import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, image, price, inCart, stock } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="image-container p-0"
                  onClick={() => value.handleDetail(id)}
                >
                  {/* Link to Details Page */}
                  <Link to="/details">
                    {/* Image */}
                    <img
                      src={image}
                      alt="product"
                      className="card-img-top"
                    ></img>
                  </Link>
                  {/* Cart Button */}
                  <button
                    className="cart-button"
                    //disabled={inCart ? true : false}
                    disabled={stock === 0 ? true : inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                      value.decreaseStock(id);
                    }}
                  >
                    {stock === 0 ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        Out of stock
                      </p>
                    ) : inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        in cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus"></i>
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          {/* Card Footer */}
          <div className="card-footer d-flex justify-content-between px-0">
            <p className="align-self-center mb-0 pb-0">{title}</p>
          </div>
          <div className="card-footer d-flex justify-content-between px-0">
            <h5 className="text-darkRed font-weight-bold">
              <span className="mr-0">£</span>
              {parseFloat(price).toFixed(2)}
            </h5>
            <h5 className="text-darkRed font-weight-bold">
              <span className="mr-0">Stock: </span>
              {stock}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    stock: PropTypes.number
  }).isRequired
};

const ProductWrapper = styled.div`
  .card {
    border-color: rgba(0, 0, 0, 0); //0.2
    transition: all 1s linear;
  }

  .card-footer {
    transition: all 1s linear;
    background: var(--white);
    border-top: 0 none;
  }
    .card-footer {
      background: rgba(22 22, 22);
    }
  }

  .image-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }

  .cart-button {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0.2rem, 0.4rem;
    background: var(--darkRed);
    border: none;
    color: var(--white);
    font-size: 1.4rem;
    border-radius: 0 0.5rem 0 0;
    transform: translate(-100%, 100%);
    transition: all 1s ease-in-out;
    outline: none;
  }

  .image-container: hover .cart-button {
    transform: translate(0, 0);
  }

  @media(hover: none) {
    .cart-button {
      transform: translate(0, 0);
    }
  }
  
  .cart-button: hover {
    color: var(--white);
    background: var(--lightRed);
    cursor: pointer;
  }
`;
