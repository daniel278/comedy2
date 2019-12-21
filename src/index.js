import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
const root = document.getElementById('root');

const render = () => {
  ReactDOM.render(
      <App />,root
  );
};

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default; // Get the updated code
        console.log("hola");
        render(NextApp);
    });
}

