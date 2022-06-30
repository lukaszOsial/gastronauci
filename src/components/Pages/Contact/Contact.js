import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import './Contact.css';


export const Contact = () => {
  return (
    <div className='contact'>
        <div className='title'>
          <h2>Napisz do nas. Lubimy rozmawiać.</h2>
        </div>
        <div className='contact-description'>
          <p>Chcesz nawiązać współpracę, lub masz pomysł na usprawnienie?</p>
          <p>Skontaktuj się z nami - chętnie porozmawiamy!</p>
        </div>
        <div className='contact-links'>
          <a href="mailto:kontakt@gastronauci.pl" target="_blank">kontakt@gastronauci.pl</a>
          <a href="mailto:reklamacje@gastronauci.pl" target="_blank">reklamacje@gastronauci.pl</a>
          <a href="mailto:wspolpraca@gastronauci.pl" target="_blank">wspolpraca@gastronauci.pl</a>
        </div>
        <div className='contact-items'>
          <a href="https://www.facebook.com/" target="_blank"><FaFacebookF size={45} /></a>
          <a href="https://www.instagram.com/" target="_blank"><FaInstagram size={45} /></a>
        </div>
    </div>
  )
}
