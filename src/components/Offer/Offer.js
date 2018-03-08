import React from 'react';

const Offer = ({ offerThing }) => {

    const { offer, id, price, validFor } = offerThing;

    return (
        <div>
            <div className="offer-item">
                <img src={"https://memegenerator.net/img/instances/54122445/i-make-special-price-for-you-my-friend.jpg"} alt={offer} />
                <div> Special: {validFor} </div>
                <div> Special: {id} </div>
                <div> Special offer: {offer} </div>
                <div> Special price: {price} </div>
            </div>
        </div>
    )
};

export default Offer;