import React from 'react';

class PizzaDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let selectedPizza = {
            id: 8,
            name: "Cheese Delight!",
            description: "Pizza with mozzarella, cheddar, cream cheese, pepper cheese and strawberry jam",
            price: 2000,
            image: "https://www.dominos.is/media/1096/media-6949-dominos_deluxe.png?width=400&format=jpg&quality=50&bgcolor=fff"
        };

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