import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Pizzas from "./components/Pizzas/Pizzas";
import PizzaDetails from "./components/PizzaDetails/PizzaDetails";
import Offers from "./components/Offers/Offers";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Drasl from "./components/Drasl/Drasl";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Pizzas />
      </div>
    );
  }
}

export default App;

