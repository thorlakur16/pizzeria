import React from 'react';
import {NavLink} from "react-router-dom";

class Cart extends React.Component {

    componentDidMount() {
        let _order = JSON.parse(localStorage.getItem('order'));
        if(_order === null){
            _order = [];
        }
        let arr = [];
        for(let i = 0; i < _order.length; i++){
            arr.push(_order[i]);
        }

        this.setState({order: arr});
    }

    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state = {
            order: []
        }

    }

    removeFromCart (e) {
        let _order = this.state.order;
        _order.splice(e.target.id, 1);
        this.setState({order: _order});
        localStorage.setItem('order', JSON.stringify(_order));
    }

    render() {
        const { order } = this.state;

        let total = 0;
        for(let i = 0; i < order.length; i++){
            total += order[i].price;
        }



        return (
            <div className="cart">
                <h2>Cart</h2>
                {order.map(p =>
                    <div className="cart-item" >
                        <div> {p.id} : {p.name} : {p.price} kr. <button id ={p.id} onClick={this.removeFromCart}>Remove</button></div>
                    </div>
                )}

                <div>Total price: {total}</div>
                <h2>Checkout</h2>
                <NavLink
                    to='/delivery'
                    activeClassName='active'
                    className='nav-link'>Delivery</NavLink>
                <NavLink
                    to='/pickup'
                    activeClassName='active'
                    className='nav-link'>Pickup</NavLink>
            </div>
        )
    };
}

Cart.propTypes = {};

export default Cart;
