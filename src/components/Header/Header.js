import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';


function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
        <nav className='navbar'>
            <div className='nav-container'>
                <NavLink  
                    to="/"
                    className="nav-logo"
                >
                    Gastronauci
                </NavLink>
                <ul className="nav-menu">
                    <li className='nav-item'>
                        <NavLink
                        to="/order"
                        className="nav-links"
                        onClick={handleClick}
                        >
                            Zamawiaj
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink
                        to="/contact"
                        className="nav-links"
                        onClick={handleClick}
                        >
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Header;