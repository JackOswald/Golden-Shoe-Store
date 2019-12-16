import React, { Component } from "react";
//Import router
import { Route, Switch } from "react-router-dom";
import "./App.css";
// Import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// Import components
import Navbar from "./components/NavBar/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import ShoppingCart from "./components/ShoppingCart";
import Modal from "./components/Modal";
import Toolbar from "./components/NavBar/Toolbar";
import SidePanel from "./components/NavBar/SidePanel";
import Backdrop from "./components/NavBar/Backdrop";

import Home from "./pages/Home";

class App extends Component {
  state = {
    sidePanelOpen: false
  };
  panelToggleClickHandler = () => {
    this.setState(prevState => {
      return { sidePanelOpen: !prevState.sidePanelOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sidePanelOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sidePanelOpen) {
      backDrop = <Backdrop click={this.backDropClickHandler} />;
    }
    return (
      <div className={{ height: "100%" }}>
        <React.Fragment>
          <Toolbar panelClickHandler={this.panelToggleClickHandler} />
          <SidePanel show={this.state.sidePanelOpen} />
          {backDrop}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products" component={ProductList} />
            <Route path="/details" component={Details} />
            <Route path="/shoppingcart" component={ShoppingCart} />
          </Switch>
          <Modal />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
