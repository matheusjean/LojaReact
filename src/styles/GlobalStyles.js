import styled, { createGlobalStyle } from 'styled-components';
import { primaryColor, primaryDarkColor } from '../config/colors';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    top:300px;
  }

  body {
    font-family: sans-serif;
    background: ${primaryDarkColor};
    color: ${primaryColor};
  }
  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${primaryColor};
    border: none;
    border-radius: 3px;
    color: #ffff;
    padding: 5px 10px;
    font-weight: 777;
  }

  a {
    text-decoration: none;
    color: ${primaryColor};
  }

`;

export const Container = styled.section`
  max-width: 360px;
  background: #ffff;
  margin: 30px auto;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  position: relative;
  top: 300px;
`;
