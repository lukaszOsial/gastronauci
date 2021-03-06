import React from 'react'
import './Home.css'
import { NavLink } from 'react-router-dom';
import { Footer } from '../Footer/Footer';

export const Home = () => {
  return (
    <div>
      <div className='home-info'>
        <img src='/images/home.webp' alt='home-img'/>
        <div className='description'>
            <h2>Gastronauci <br/>lepiej lokalnie</h2>
            <p>Twój ulubiony lubelski portal. Stworzony w celu wsparcia lokalnych restauratorów i ich zamawiających</p>
        </div>
      </div>
      <div className='instruction'>
        <img src='/images/lublin.webp' alt='lublin'/>
        <h2>Gastronauci, jak to działa?</h2>
        <div className='instruction-container'>
          <div className='grid-container'>
            <h3>Wspierasz ulubione restauracje</h3>
            <h3>Więcej zamawiasz - więcej otrzymujesz</h3>
            <h3>Lubelski. Dla swoich.</h3>
            <p>Z naszą platformą Twoje ulubione lokale płacą znacznie mniejszą prowizję niż w wypadku zagranicznych portali.</p>
            <p>Cykliczne promocje na wybrane typy kuchni, wspólne kampanie z lokalnymi predsiębiorstwami i kody rabatowe na każdą okazję.</p>
            <p>Stworzony przez nas portal dba jednocześnie o wygodę zamawiających, jak i uczciwe warunki dla Restauracji.</p>
          </div>
        </div>
      </div>
      <div className='partnership'>
        <div className='description'>
          <h2>Prowadzisz lokal?</h2>
          <p>To świetnie się składa - odezwij się do nas i nawiążmy współpracę. Dodamy Cię do bazy naszych restauracji, aby przyszli klienci mogli Cię łatwo odnaleźć i składać zamówienia.</p>
          <NavLink  
            to="/partnership"
            className="button"
          >
            Sprawdź ofertę
          </NavLink>
        </div>
        <div className='img-box'>
          <img src='/images/partnership.webp' alt='partnership'/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}