import React from 'react';
import './App.css';
import logo_blanco_svg from './assets/img/logo/yula_blanco.svg';
import logo_negro_svg from './assets/img/logo/yula_negro.svg';
import logo_svg from './assets/img/logo/yula.svg';

function App() {
  return (
    <div className="App">
      <header>
        <div className="cabecera_celular">
          <img id='logo_cabecera_celular' src={ logo_svg } width='50px'></img>
        </div>
        <div id="cabecera_pc">
          <nav className="cabecera_nav_pc">
            <img className='logo_cabecera_pc' src={ logo_negro_svg } width='50px'></img>
            <ul>
              <li><a>Home</a></li>
              <li><a>Stand Up</a></li>
              <li><a>CADO</a></li>
              <li><a>Otros</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <footer>
        <div id="footer_cell">
          <nav className="footer_nav_cell">
            <ul>
              <li><a>Home</a></li>
              <li><a>Stand Up</a></li>
              <li><a>CADO</a></li>
              <li><a>Otros</a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
