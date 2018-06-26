import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import StoreFront from "./components/StoreFront/StoreFront";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/storefront" component={StoreFront} />
          <Route path="/shoppingcart" component={ShoppingCart} />
        </Switch>
      </div>
    );
  }
}

export default App;
