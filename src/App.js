import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
// import history from './services/history';
import GlobalStyle from './styles/GlobalStyles';
import Header from './components/header';
import Routes from './routes';
import FooterBar from './components/Footer/index';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <FooterBar />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
