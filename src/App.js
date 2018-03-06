import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Pizzas from "./components/Pizzas/Pizzas";
import PizzaDetails from "./components/PizzaDetails/PizzaDetails";
import Offers from "./components/Offers/Offers";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Drasl from "./components/Drasl/Drasl";
import NavBar from "./components/NavBar/NavBar";

class App extends Component {

    constructor () {
        super();
        this.changeCurrentPizza = this.changeCurrentPizza.bind(this);
        this.state = {
            currentPizza: {}
        }
    }

    changeCurrentPizza(pz) {
        this.setState({currentPizza: pz});
        console.log('changeCurrentPizza App: ');
        console.log(this.state.currentPizza);
    }

    render() {
        return (
            <div className="App">
                <NavBar />
                <Offers />
            </div>
        );
    }
}


/*
                <Pizzas changeCurrentPizza={this.changeCurrentPizza} />
                <PizzaDetails currentPizza={ this.state.currentPizza } />
 */

export default App;

