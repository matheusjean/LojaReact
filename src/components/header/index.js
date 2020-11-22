import React from 'react';
import { FaPowerOff, FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import * as actions from '../../store/modules/auth/actions';
import { Nav } from './styled';

export default function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(actions.loginFailure());
    history.push('/');
  };

  return (
    <Nav>
      <Link to="/">
        <FaHome size={40} />
      </Link>
      <Link to="/panos-de-prato">Panos de Prato</Link>
      <Link to="/panos-de-mesa">Panos de Mesa</Link>
      <Link to="/toalhas">Toalhas</Link>
      <Link to="/roupas-de-banho">Roupas de Banho</Link>
      <Link to="/cachecois">Cachecóis</Link>

      <Link to="/register">
        <FaUserAlt size={40} />
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} />
        </Link>
      ) : (
        <Link to="/login">
          <FaSignInAlt size={24} />
        </Link>
      )}
      {/* <Link to="/fbpage">
        <FaFacebookF size={40} />
      </Link>

      <Link to="/instapage">
        <FaInstagram size={40} />
      </Link> */}
    </Nav>
  );
}
