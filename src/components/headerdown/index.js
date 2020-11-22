import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <Link to="/fbpage">
        <FaFacebookF size={30} />
      </Link>

      <Link to="/instapage">
        <FaInstagram size={30} />
      </Link>
    </Nav>
  );
}
