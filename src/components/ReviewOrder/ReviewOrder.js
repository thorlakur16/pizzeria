import React from 'react';

class ReviewOrder extends React.Component {

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

        let _user = JSON.parse(localStorage.getItem('user'));

        if ( _user.hasOwnProperty('address') ) {
            this.delivery = true;
        }

        this.setState({user: _user});
    }

    constructor(props) {
        super(props);
        this.delivery = false;
        this.confirmOrder = this.confirmOrder.bind(this);
        this.state = {
            order: [],
            user: {}
        }
    }

    confirmOrder() {
        const { order, user } = this.state;
        fetch('http://localhost:3500/api/orders/'+user.telephone, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: user,
                secondParam: order
            })
        });
        localStorage.clear();
    }

    render() {
        const { order, user } = this.state;

        let total = 0;
        for(let i = 0; i < order.length; i++){
            total += order[i].price;
        }

        return (
            this.delivery ?
                <div>
                    <h2>Name: {user.fullName}</h2>
                    <h3>Telephone: {user.telephone}</h3>
                    <h3>Address: {user.address}</h3>
                    <h3>City: {user.city}</h3>
                    <h3>Zip code: {user.zipcode}</h3>
                    <div className="cart">
                        <h2>Cart</h2>
                        {order.map(p =>
                            <div className="cart-item" >
                                <div> {p.id} : {p.name} : {p.price} kr.</div>
                            </div>
                        )}

                        <div>Total price: {total}</div>
                        <button onClick={this.confirmOrder}>Confirm</button>
                    </div>
                </div> :
            <div>
                <h2>Name: {user.fullName}</h2>
                <h3>Telephone: {user.telephone}</h3>
                <div className="cart">
                    <h2>Cart</h2>
                    {order.map(p =>
                        <div className="cart-item" >
                            <div> {p.id} : {p.name} : {p.price} kr.</div>
                        </div>
                    )}

                    <div>Total price: {total}</div>
                    <button onClick={this.confirmOrder}>Confirm</button>
                </div>
            </div>
        )
    };
}

export default ReviewOrder;
