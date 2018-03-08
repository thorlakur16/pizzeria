import React from 'react';
import {connect} from "react-redux";
import Offer from '../Offer/Offer'
import { getAllOffers } from "../../actions/actions";

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
        const{ getAllOffers } = this.props;
        getAllOffers();
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
    const { offer } = this.props;

        return (
            <div>
                <h2>Offers</h2>
                <div className="offers">
                    {offer.map(p => <Offer key={p.id} offerThing={p}  />)}
                </div>
            </div>
        )
    };
}

const mapStateToProps = ({ offer }) => {
    return { offer }
};

export default connect(mapStateToProps, { getAllOffers })(Offers);