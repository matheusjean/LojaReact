import styled from 'styled-components';

export const Nav = styled.footer`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 30px;
  background-color: yellow;
  //width: 10%;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 550px;
  box-sizing: border-box;
  a {
    color: black;
    margin: 0 10px 0 0; // 1: Cima, 2: direita
    font-weight: bold;
  }
  div + div {
    border-top: white;
  }
`;
