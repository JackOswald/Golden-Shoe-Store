import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrawToggleButton from "./ToggleButton";
import { ButtonContainer } from "../Button";

class Toolbar extends Component {
  render() {
    return (
      <ToolBarWrapper className="navbar navbar-expand-sm navbar-dark px-sm-4">
        <div className="toolbar-toggle-btn">
          <DrawToggleButton click={this.props.panelClickHandler} />
        </div>
        <div className="toolbar-nav-items">
          <ul className="navbar-nav align-items-center">
            <li className="nav-items">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item-2">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
          </ul>
        </div>
        <div className="toolbar-nav-cart ml-auto">
          <Link to="/ShoppingCart">
            <ButtonContainer>
              <span className="mr-2">
                <i className="fas fa-cart-plus" />
              </span>
              my cart
            </ButtonContainer>
          </Link>
        </div>
      </ToolBarWrapper>
    );
  }
}
export default Toolbar;

const ToolBarWrapper = styled.nav`
  background: var(--darkRed);
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 1);
  .toolbar-nav {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 3rem;
  }

  .toolbar-nav-items a {
    color: var(--white) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    text-decoration: none;
    margin-left: 30px;
    &:hover {
      color: var(--white) !important;
      border-bottom: 2px solid var(--white);
      padding-bottom: 4px;
    }
  }

  @media (max-width: 768px) {
    .toolbar-nav-items a,
    .toolbar-nav-cart {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .toolbar-toggle-btn {
      display: none;
    }

    .toolbar-nav-items a {
      margin-left: 0;
    }
  }
`;
