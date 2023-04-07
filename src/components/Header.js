import '../styles/App.scss';
import { useState } from 'react';
import logo from '../images/logo.png';

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }
  return (
    <>
      <header className="header">
        <a href="https://github.com/mhidalgoma">
          <img className="header__logo" src={logo} alt="Calenpet logo" />
        </a>
        <div className="header__burger" onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <nav className={`header__nav ${showNav && 'visible'}`}>
          <div className="header__nav--close" onClick={toggleNav}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="header__nav--list">
            <li className="header__nav--list-item">
              <a href="https://github.com/mhidalgoma">¿Qué es CalenPet?</a>
            </li>
            <li className="header__nav--list-item">
              <a href="https://github.com/mhidalgoma"> Cómo usar CalenPet</a>
            </li>
            <li className="header__nav--list-item">
              <a href="https://github.com/mhidalgoma"> Sobre nosotros</a>
            </li>
            <li className="header__nav--list-item">
              <a href="https://github.com/mhidalgoma">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
