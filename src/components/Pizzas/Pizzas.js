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
        let selectedPizza = this.state.dataArray[e.target.id -1];

        //this.props.changeCurrentPizza(selectedPizza);
    }

    render() {
        const { pizza } = this.props;
        return (
            <div>
                <h2>Menu</h2>
                <div className="menu">
                    {pizza.map(p => <Pizza key={p.id} pizza={p} />)}
                </div>
            </div>
        )
    };
}

const mapStateToProps = ({ pizza }) => {
    return { pizza }
};

export default connect(mapStateToProps, { getAllPizzas })(Pizzas);