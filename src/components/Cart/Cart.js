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
        console.log(arr);
        this.setState({order: arr});
    }

    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.addToOrder = this.addToOrder.bind(this);
        this.checkoutDelivery = this.checkoutDelivery.bind(this);
        this.checkoutPickup = this.checkoutPickup.bind(this);
        this.state = {
            order: []
        }

    }

    //for testing purposes, remove from final product.
    addToOrder() {

        let selectedPizza = {
            id: 69,
                name: "Cheesus Crust",
                description: "Double cheese on double cheese. All the cheese",
                price: 6000,
                image: "http://snworksceo.imgix.net/ohi/ead6a57c-1980-4033-80cd-4d9a9aa9c197.sized-1000x1000.jpg"
        };

        let _order = JSON.parse(localStorage.getItem('order'));
        let arr = [];
        if(_order === null){
            _order = [];
        }
        arr.push(selectedPizza);
        console.log(arr);
        for(let i = 0; i < _order.length; i++){
            arr.push(_order[i]);
        }

        this.setState({order: _order});
        localStorage.setItem('order', JSON.stringify(arr));
    }

    removeFromCart (e) {
        let _order = this.state.order;
        _order.splice(e.target.id, 1);
        this.setState({order: _order});
        localStorage.setItem('order', JSON.stringify(_order));
    }

    checkoutDelivery() {

    }

    checkoutPickup(){

    }

    render() {
        const { order } = this.state;

        let total = 0;
        for(let i = 0; i < order.length; i++){
            total += order[i].price;
        }

        return (
            <div className="cart">
                <button onClick={this.addToOrder} >Add</button>
                <h2>Cart</h2>
                {order.map((item, key) => { return (
                    <div className="cart-item" >
                        <div> {key} : {item.name} : {item.price} kr. <button id ={key} onClick={this.removeFromCart}>Remove</button></div>
                    </div>)
                    })
                }
                <div>Total price: {total}</div>
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
