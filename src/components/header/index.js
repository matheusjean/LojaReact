import React from 'react';
import { FaHome, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/panos-de-prato">Panos de Prato</Link>
      <Link to="/cachecois">Cachecóis</Link>
      <Link to="/toalhas">Toalhas</Link>

      <Link to="/">
        <FaHome size={40} />
      </Link>

      <Link to="/fbpage">
        <FaFacebookF size={40} />
      </Link>

      <Link to="/instapage">
        <FaInstagram size={40} />
      </Link>
    </Nav>
  );
}
