import '../styles/App.scss';
import { useState } from 'react';
import logo from '../images/logo.png';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  const [showNav, setShowNav] = useState(false);

  function toggleNav() {
    setShowNav(!showNav);
  }
  return (
    <>
      <header className="header">
        <NavLink to="/">
          <img className="header__logo" src={logo} alt="Calenpet logo" />
        </NavLink>
        <div className="header__burger" onClick={toggleNav}>
          <i className="fa-solid fa-bars"></i>
        </div>
        <nav className={`header__nav ${showNav && 'visible'}`}>
          <div className="header__nav--close" onClick={toggleNav}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <ul className="header__nav--list">
            <li className="header__nav--list-item">
              <NavLink to="/what-is">¿Qué es CalenPet?</NavLink>
            </li>
            <li className="header__nav--list-item">
              <NavLink to="/how-to">Cómo usar CalenPet</NavLink>
            </li>
            <li className="header__nav--list-item">
              <NavLink to="/about">Sobre nosotros</NavLink>
              <a href="https://github.com/mhidalgoma"> Sobre nosotros</a>
            </li>
            <li className="header__nav--list-item">
              <NavLink to="/contact">Contacto</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default Header;
