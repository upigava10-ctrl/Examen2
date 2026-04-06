import React from 'react';
import './Card.css'

const Card = ({country, method}) => {
    return (
        <button onClick={method} className='btn'>
            {country.name.common}
        </button>
    );
};

export default Card;