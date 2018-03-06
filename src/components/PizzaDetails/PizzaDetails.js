import React from 'react';

class PizzaDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let selectedPizza = this.props.currentPizza;
        console.log(this.props.currentPizza);
        console.log(selectedPizza);
        if(selectedPizza === undefined) {
            selectedPizza = {
                id: 0,
                name: "",
                description: "",
                price: 0,
                image: ""
            };
        }

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
            </div>
        )
    };
}

export default PizzaDetails;