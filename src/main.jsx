import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import WebFont from 'webfontloader';
import { store } from './Redux/store.js';
import { Provider } from 'react-redux';
// WebFont.load({
//   google: {
//     families: ['Montserrat :100,200,300,400,500,600,700,800,900'],
//   },
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
