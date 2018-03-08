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
        console.log(_user);
    }

    constructor(props) {
        super(props);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.state = {
            order: [],
            user: {}
        }
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
                        <div> {p.id} : {p.name} : {p.price} kr.</div>
                    </div>
                )}

                <div>Total price: {total}</div>
                <button>Confirm</button>
            </div>
        )
    };
}

export default ReviewOrder;
