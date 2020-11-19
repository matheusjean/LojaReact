import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header/index';
import Routes from './routes/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
