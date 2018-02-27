import React from 'react';

class Pizzas extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        fetch('http://localhost:3500/api/pizzas').then(response => response.json()).then(json => console.log(json));
    }

    render() {
        return (
            <div>
                Pizzas
            </div>
        )
    };
}

export default Pizzas;