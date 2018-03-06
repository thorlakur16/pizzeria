import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Pizzas from "./components/Pizzas/Pizzas";
//import PizzaDetails from "./components/PizzaDetails/PizzaDetails";
import Offers from "./components/Offers/Offers";
//import Cart from "./components/Cart/Cart";
//import Drasl from "./components/Drasl/Drasl";
import NavBar from "./components/NavBar/NavBar";
import MuiThemeProvder from 'material-ui/styles/MuiThemeProvider';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About/About';

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
            <MuiThemeProvder>
                <div className="App">
                    <NavBar/>
                    <div className='main-container'>
                        <Switch>
                            <Route path='/about' component={About}/>
                            <Route path='/offers' component={Offers}/>
                            <Route exact path='/menu' render={() => {
                                return <Redirect to='/'/>
                            }}/>
                            <Route exact path='/' component={Pizzas}/>

                        </Switch>
                    </div>
                </div>
            </MuiThemeProvder>
        );
    }
}


/*
                <Pizzas changeCurrentPizza={this.changeCurrentPizza} />
                <PizzaDetails currentPizza={ this.state.currentPizza } />
 */

export default App;

