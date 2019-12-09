import React from 'react';
import './App.css';
import logo_blanco_svg from '../assets/img/logo/yula_blanco.svg';
import logo_negro_svg from '../assets/img/logo/yula_negro.svg';

function App() {
  return (
    <div className="App">
      <header>
        <div id="cabecera_pc">
          <nav class="cabecera_nav_pc">
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
          <nav class="cabecera_nav_cell">
            <img className='logo_cabecera' src={ logo_negro_svg } width='50px'></img>
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
