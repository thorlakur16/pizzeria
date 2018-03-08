import React from 'react';

class PizzaDetails extends React.Component {

    /*componentDidMount() {
        const {getPizzaDetails} = this.props;
        const {pizzaId} = this.props.match.params;
    }*/

    // inn í component did mount chacka á param  hvort hann sé til og ef hann er til þá á að sækja pizzu sem hefur þetta id



    constructor(props) {
        super(props);
        this.addToOrder = this.addToOrder.bind(this);
        this.state = {
            order: [],
            selectedPizza: {
                id: 69,
                name: "Cheesus Crust",
                description: "Double cheese on double cheese. All the cheese",
                price: 6000,
                image: "http://snworksceo.imgix.net/ohi/ead6a57c-1980-4033-80cd-4d9a9aa9c197.sized-1000x1000.jpg"
            }
        }
    }

    addToOrder() {
        let order = JSON.parse(localStorage.getItem('order'));
        let arr = [];
        if(order === null){
            order = [];
        }
        arr.push(this.state.selectedPizza);
        for(let i = 0; i < order.length; i++){
            arr.push(order[i]);
        }

        localStorage.setItem('order', JSON.stringify(arr));
    }

    render() {

        const { selectedPizza } = this.props.selectedPizza;

        return (
            <div>
                <h2>{selectedPizza.name}</h2>
                <div>
                    <img src={selectedPizza.image} alt={selectedPizza.name} />
                </div>
                <p>
                    {selectedPizza.description}
                </p>
                <div>Price: {selectedPizza.price} </div>
                <button id="addToCart" onClick={this.addToOrder}>Add to cart</button>
            </div>
        )
    };
}

export default PizzaDetails;