import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Pizzas from "./components/Pizzas/Pizzas";
import PizzaDetails from "./components/PizzaDetails/PizzaDetails";
import Offers from "./components/Offers/Offers";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Drasl from "./components/Drasl/Drasl";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Pizzas/>
      </div>
    );
  }
}

export default App;

