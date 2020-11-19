import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    // React fragment ( <> </>), Title é o H1
    <Container>
      <Title>
        Login
        <small />
      </Title>
      <Paragrafo>Lembrar de colocar esta página na rota de login</Paragrafo>
      <Paragrafo>Criar o form</Paragrafo>
      <Paragrafo>Mudar esse botão feio</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
