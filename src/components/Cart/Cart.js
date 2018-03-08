import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {

    componentDidMount() {
        let _order = JSON.parse(localStorage.getItem('order'));
        let arr = [];
        for(let i = 0; i < _order.length; i++){
            arr.push(_order[i]);
        }
        console.log(arr);
        this.setState({order: arr});
    }

    constructor(props) {
        super(props);
        this.state = {
            order: []
        }
    }

    render() {

        const { order } = this.state;

        return (
            <div className="cart">
                <h2>Cart</h2>
                {order.map((item, key) => { return (
                    <div className="cart-item" >
                        <div> {item.name} : {item.price} kr. </div>
                    </div>)
                })
                }
            </div>
        )
    };
}

Cart.propTypes = {};

export default Cart;
