import React from 'react';

class Offers extends React.Component {

    constructor(props) {
        super(props);
        this.updateData = this.updateData.bind(this);
        this.offerClicked = this.offerClicked.bind(this);
        this.state = {
            dataArray: []
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        fetch('http://localhost:3500/api/offers').then(response => response.json()).then(json =>{this.updateData(json)}
        );
    }

    updateData(json) {
        console.log('updateData');
        let arr = Object.assign([], this.state.dataArray);

        for (var key in json) {
            arr.push(json[key]);
        }
        console.log(arr);
        this.setState({ dataArray: arr });
    }

    offerClicked (e) {
        let selectedOffer = e.target.id;
        console.log('Offers selected offers: ');
        console.log(selectedOffer);
    }

    render() {
        console.log('render ' +this.state);
        const { dataArray } = this.state;

        return (
            <div>
                <h2>Offers</h2>
                <div className="offers">

                    {dataArray.map((item, key) => { return (
                        <div className="offer-item" >
                            <img src={"https://memegenerator.net/img/instances/54122445/i-make-special-price-for-you-my-friend.jpg"}
                                 alt={item.offer}
                                 id={item.id}
                                 onClick={this.offerClicked}
                            />

                            <div>
                                {item.offer}
                            </div>

                            <div>
                                Special price: {item.price}
                            </div>

                        </div>)
                    })
                    }
                </div>
            </div>
        )
    };
}

export default Offers;