import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
// import BaseStyle from './ui/baseStyle';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        {/* <BaseStyle /> */}
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);
