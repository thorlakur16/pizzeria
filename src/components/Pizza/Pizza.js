import React from 'react';

const Pizza = ({ pizza }) => {

    const { id, name, description, price, image } = pizza;

    return (
        <div>
            <div className="pizza-item">
                <img src={image} alt={name} id={id}/>
                <div> {name} </div>
                <div> {description} </div>
                <div> {price} </div>
            </div>
        </div>
    )
};

export default Pizza;