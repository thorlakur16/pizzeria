import React from 'react';
import { connect } from 'react-redux';
import Pizza from '../Pizza/Pizza';
import { getAllPizzas } from "../../actions/actions";

class Pizzas extends React.Component {

    constructor(props) {
        super(props);
        this.pizzaClicked = this.pizzaClicked.bind(this);
        this.state = {
            dataArray: []
        };
    }

    componentDidMount() {
        const{ getAllPizzas } = this.props;
        getAllPizzas();
    }

    pizzaClicked (e) {
        let selectedPizza;
        for(let i = 0; i < this.props.pizza.length; i++){
            if(this.props.pizza[i].id === e.target.id){
                selectedPizza = this.props.pizza[i];
            }
        }
        this.addToOrder(selectedPizza);
    }

    addToOrder(pizzaToAdd) {

        let _order = JSON.parse(localStorage.getItem('order'));
        console.log(_order);
        let arr = [];
        if(_order === null){
            _order = [];
        }
        arr.push(pizzaToAdd);
        for(let i = 0; i < _order.length; i++){
            arr.push(_order[i]);
        }

        localStorage.setItem('order', JSON.stringify(arr));
    }

    render() {
        const { pizza } = this.props;
        return (
            <div>
                <h2>Menu</h2>
                <div className="menu">
                    {pizza.map(p => <div id={p.id} onClick={this.pizzaClicked}><Pizza key={p.id} pizza={p} /></div>)}
                </div>
            </div>
        )
    };
}

const mapStateToProps = ({ pizza }) => {
    return { pizza }
};

export default connect(mapStateToProps, { getAllPizzas })(Pizzas);