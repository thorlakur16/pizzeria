import React from 'react';

class Pizzas extends React.Component {

    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.state = {
            data: {},
            dataArray: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3500/api/pizzas').then(response => response.json()).then(json =>{this.updateData(json)});
    }

    updateData(data) {
        this.setState({data: data});
    }

    render() {
        const { data } = this.state;
        console.log(data);
        for (var o in data) {
            this.dataArray.push(o);
        }
        console.log(this.dataArray);
        return (
            <div>
                Pizzas

            </div>
        )
    };
}

export default Pizzas;