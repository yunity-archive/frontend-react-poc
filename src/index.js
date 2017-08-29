import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';

const store = configureStore();

// App startup
const render = () => ReactDOM.render(
  // connect redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

render();
registerServiceWorker();

// Hot Module Replacement: tell webpack to rerender if ./App changes
if (module.hot) module.hot.accept('./App', render);
