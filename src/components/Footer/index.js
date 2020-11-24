import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';
// import { Container } from '../../styles/GlobalStyles';

export default function Footer() {
  return (
    <Nav>
      <Link to="/sobre-nos">Sobre nós</Link>
      <Link to="/onde-estamos">Localização</Link>
      <Link to="/a-dani">Conheça a Dani</Link>
      <Link to="/desenvolvedor">Desenvolvedor</Link>
      <Link to="/fbpage">
        <FaFacebookF size={35} />
      </Link>

      <Link to="/instapage">
        <FaInstagram size={35} />
      </Link>
    </Nav>
  );
}
