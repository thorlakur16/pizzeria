import React from 'react';

class Pizzas extends React.Component {

    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.pizzaClicked = this.pizzaClicked.bind(this);
        this.state = {
            dataArray: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3500/api/pizzas').then(response => response.json()).then(json =>{this.updateData(json)}
        );
    }

    updateData(json) {
        let arr = Object.assign([], this.state.dataArray);

        for (var key in json) {
            arr.push(json[key]);
        }
        console.log(arr);
        this.setState({ dataArray: arr });
    }

    pizzaClicked (e) {
        let selectedPizza = this.state.dataArray[e.target.id -1];
        this.props.changeCurrentPizza(selectedPizza);
    }

    render() {

        const { dataArray } = this.state;

        return (
            <div>
                <h2>Menu</h2>
                <div className="menu">

                    {dataArray.map((item, key) => { return (
                        <div className="menu-item" >
                            <img src={item.image} alt={item.name}  id={item.id} onClick={this.pizzaClicked} />
                        <div> {item.name} </div>

                        </div>)
                        })
                    }
                </div>
            </div>
        )
    };
}

export default Pizzas;