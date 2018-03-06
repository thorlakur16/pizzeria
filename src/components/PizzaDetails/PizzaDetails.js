import React from 'react';

class PizzaDetails extends React.Component {

    componentDidMount() {
        var order = JSON.parse(localStorage.getItem('order'));
        console.log(order);
        this.setState({selectedPizza: this.props.currentPizza});
    }

    constructor(props) {
        super(props);
        this.state = {
            order: [],
            selectedPizza: {}
        }
    }

    addToOrder() {
        var order = JSON.parse(localStorage.getItem('order'));
        console.log(order);
        let thingToAdd = this.state.selectedPizza;
        console.log(thingToAdd);
        localStorage.setItem('order', JSON.stringify(thingToAdd));
    }

    render() {


        if(this.state.selectedPizza === undefined) {
            let _selectedPizza = {
                id: 69,
                name: "Cheesus Crust",
                description: "Double cheese on double cheese. All the cheese",
                price: 6000,
                image: "http://snworksceo.imgix.net/ohi/ead6a57c-1980-4033-80cd-4d9a9aa9c197.sized-1000x1000.jpg"
            };
            this.setState({selectedPizza: _selectedPizza});
        }

        const { selectedPizza } = this.state;

        console.log(this.state);

        return (
            <div>
                <h2>{_selectedPizza.name}</h2>
                <div>
                    <img src={_selectedPizza.image} alt={_selectedPizza.name} />
                </div>
                <p>
                    {_selectedPizza.description}
                </p>
                <div>Price: {_selectedPizza.price} </div>
                <button id="addToCart" onClick={this.addToOrder}>Add to cart</button>
            </div>
        )
    };
}

export default PizzaDetails;