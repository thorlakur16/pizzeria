import React from 'react';


class PizzaDetails extends React.Component {

    componentDidMount() {
        const {getPizzaDetails} = this.props;
        const {pizzaId} = this.props.match.params;
    }

    // inn í component did mount chacka á param  hvort hann sé til og ef hann er til þá á að sækja pizzu sem hefur þetta id


    constructor(props) {
        super(props);


    }

    render() {

        let selectedPizza = this.props;
        console.log(this.props);
        console.log(this.params);
        console.log(selectedPizza);
        if(selectedPizza == undefined) {
            selectedPizza = {
                id: '',
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