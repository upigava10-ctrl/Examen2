import React from 'react';
import './Card.css'

const Card = ({country, method}) => {
    // console.log(Object.values(country.currencies)[0].name)
    const getCurrencyName = (currencies) => {
        if (Object.keys(currencies).length >0) {
            return Object.values(currencies)[0].name;
        }else{
            return "No definida"
        }
    };
    const getCurrencySymbol = (currencies) => {
        if (Object.keys(currencies).length >0) {
            // console.log(Object.values(country.currencies)[0].symbol)
            return Object.values(currencies)[0].symbol;
        }else{ 
            return "No definida"
        }
    };
    
    return (
        <button onClick={method} className='card'>
            <h3>Nombre Común:</h3>
            <p>{country.name.common}</p>
            
            <h3>Nombre Oficial:</h3>
            <p>{country.name.official}</p>
            
            <h3>Capital:</h3>
            <p>{country.capital}</p>

            <h3>Nombre de moneda:</h3>
            <p>{getCurrencyName(country.currencies)}</p>

            <h3>Símbolo:</h3>
            <p>{getCurrencySymbol(country.currencies)}</p>


        </button>
    );
};

export default Card;