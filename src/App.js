import React from 'react';
import './App.css';
import logo_blanco_svg from './assets/img/logo/yula_blanco.svg';
import logo_negro_svg from './assets/img/logo/yula_negro.svg';
import logo_svg from './assets/img/logo/yula.svg';
import home_icon from './assets/img/home_icon_naranja.png';
import stand_up_icon from './assets/img/stand_up_icon_2.png';
import etc_icon from './assets/img/etc_icon.png';
import cado from './assets/img/cado_logo.png';
import comediante_recomendado from './assets/img/comediantes/camilo_sanchez.jpg';


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
      <div id='body'>
        <div className="recomendacion card text-center">
          <div className="card-header">
            Recomendación de la semana
          </div>
          <div className="recomendacion_body card-body">
            <div className="perfil_comediante_recomendado">
              <div>Camilo Sanchez</div>
              <div><a href="https://www.instagram.com/dejemequieto/?hl=es-la">@dejemequieto</a></div>
              <div><img className="foto_comediante_recomendado" src = { comediante_recomendado }></img></div>
            </div>
            <iframe id='ytplayer' src="https://www.youtube.com/embed/_AAqUamNQA0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="card-footer">
            <a href="https://www.youtube.com/watch?v=_AAqUamNQA0" className="btn btn-danger">Ver en youtube</a>
          </div>
        </div>
      </div>
      <footer>
        <div id="footer_cell">
          <nav className="footer_nav_cell">
            <ul>
              <li><a><img src={ home_icon } width="30px"></img></a></li>
              <li><a><img src={ stand_up_icon } width="30px"></img></a></li>
              <li><a><img src={ cado } width="30px"></img></a></li>
              <li><a><img src={ etc_icon } width="30px"></img></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
