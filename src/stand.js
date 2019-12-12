import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
const root = document.getElementById('root');

class Stand extends React.Component(){
    render(){
        return(
            <div>Hola</div>
        )
    }
}

function render() {
    ReactDOM.render(<Stand />, root)
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

if (module.hot) {
    module.hot.accept('./App', () => {
        console.log("hola");
        render();
    });
}

