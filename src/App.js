import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo_negro_svg from './assets/img/logo/yula_negro.svg';
import logo_svg from './assets/img/logo/yula.svg';
import home_icon from './assets/img/home_icon_naranja.png';
import stand_up_icon from './assets/img/stand_up_icon_2.png';
import etc_icon from './assets/img/etc_icon.png';
import cado from './assets/img/cado_logo.png';
import Home from "./pages/home"
import Stand from './pages/stand';
import comediante_recomendado from './assets/img/comediantes/camilo_sanchez.jpg';


function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="cabecera_celular">
            <img id='logo_cabecera_celular' src={ logo_svg } width='50px'></img>
          </div>
          <div id="cabecera_pc">
            <nav className="cabecera_nav_pc">
              <img className='logo_cabecera_pc' src={ logo_negro_svg } width='50px'></img>
              <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/standup">stand up</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/standup">
            <Stand />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
