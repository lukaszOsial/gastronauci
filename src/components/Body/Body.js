import React from 'react'
import './Body.css';

function Body() {
    
  return (
    <div className='home-info'>
        <img src='/images/home.jpg' alt='home-img'/>
        <div className='description'>
            <h2>Gastronauci <br/>lepiej lokalnie</h2>
            <p>Twój ulubiony lubelski portal. Stworzony w celu wsparcia lokalnych restauratorów i ich zamawiających</p>
        </div>
        
    </div>
  )
}

export default Body;