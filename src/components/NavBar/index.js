import React from 'react';
import './styles.css';

import Logomenu from '../../assets/img/boxlogo.png';


const NavBar = () => 
  <header className="NavBar">
    <ul className="Menu">
      <li className="MenuLink">
        <a className="MaginLink" href="http://localhost:3000/home"> Sobre </a>
        <a className="MaginLink" href="http://localhost:3000/home"> Serviços </a>
        {/* <Link className="MaginLink" to="/products"> Serviços </Link>
            <Link className="MaginLink" to="/contact"> contato </Link> */}
      </li>
      <li>
        <a className="ComponentMenu" href="/home">
          <img className="LogoMenu" src={Logomenu} />
        </a>
      </li>
      <li>
        <a className="MaginLink" href="http://localhost:3000/home"> Ouvidoria </a>
        <a className="MaginLink" href="http://localhost:3000/home"> Contato </a>
        {/* <Link className="MaginLink" to="/products"> Serviços </Link>
            <Link className="MaginLink" to="/contact"> contato </Link> */}
      </li>
    </ul>
  </header>

export default NavBar;