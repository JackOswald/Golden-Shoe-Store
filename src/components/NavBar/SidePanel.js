import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./SidePanel.css";

const sidePanel = props => {
  let panelClass = "side-panel";
  if (props.show) {
    panelClass = "side-panel open";
  }
  return (
    <nav className={panelClass}>
      <ul className="side-list">
        <li className="side-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="side-item">
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li className="cart-item">
          <Link to="/ShoppingCart" className="nav-link">
            My Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default sidePanel;

//const SidePanelWrapper = styled.nav`
//  height: 100%;
//  background: var(--white);
//  box-shadow: 2px 0px 7px rgba(0, 0, 0, 0.5);
//  position: fixed;
//  top: 0;
//  left: 0;
//  width: 70%;
//  max-width: 400px;
//  z-index: 200;
//  font-size: 1.2rem;
//  transform: translateX(-100%);
//
//  .open {
//    transform: translateX(0);
//
//  }
//
//  a:hover,
//  a:active {
//    color: var(--darkRed);
//  }
//
//  .side-list {
//    height: 100%;
//    list-style: none;
//    display: flex;
//    flex-direction: column;
//    justify-content: center;
//  }
//
//  .side-item {
//    margin: 0.5rem 0;
//  }
//
//  .side-panel.open {
//      transform: translateX(0);
//  }
//`;
