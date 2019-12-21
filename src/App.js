import React, { Component } from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo_negro_svg from './assets/img/logo/yula_negro.svg';
import logo_svg from './assets/img/logo/yula.svg';
import home_icon from './assets/img/home_icon_naranja.png';
import stand_up_icon from './assets/img/stand_up_icon_2.png';
import etc_icon from './assets/img/etc_icon.png';
import cado from './assets/img/cado_logo.png';
import stand_up_icon_naranja from './assets/img/stand_up_icon_naranja.png';

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

function Home() {
  const comediante_recomendado_texto = "Camilo Sanchez"
  const comediante_recomendado_instagram = "@dejemequieto"
  const comediante_recomendado_instagram_link = "https://www.instagram.com/dejemequieto/?hl=es-la";
  return(
    <div>
        <div id='body'>
          <div className="recomendacion card text-center">
            <div className="card-header">
              Recomendación de la semana
            </div>
            <div className="recomendacion_body card-body">
              <div className="perfil_comediante_recomendado">
                <div>{comediante_recomendado_texto}</div>
                <div><a href={comediante_recomendado_instagram_link}>{comediante_recomendado_instagram}</a></div>
                <div><img className="foto_comediante_recomendado" src = { comediante_recomendado }></img></div>
              </div>
              <iframe id='ytplayer' src="https://www.youtube.com/embed/_AAqUamNQA0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="card-footer">
              <a href="https://www.youtube.com/watch?v=_AAqUamNQA0" className="btn btn-danger">Ver en youtube</a>
            </div>
          </div>
          <div className="curador_picks">
            <div className="card-header">
              ¿Que hay de nuevo?
            </div>
            <div className="fila_1">
              <div className="card">
                <div className="recomendacion_body card-body">
                  <iframe id="ytplayer" src="https://www.youtube.com/embed/1sLsxZSRMsI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                </div>
                <div className="card-footer">
                  <a href="https://www.youtube.com/watch?v=1sLsxZSRMsI" className="btn btn-danger">Ver en youtube</a>
                </div>
              </div>
              <div className="card">
                <div className="recomendacion_body card-body">
                <iframe id="ytplayer" src="https://www.youtube.com/embed/RW03ahBWhuY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              </div>
                <div className="card-footer">
                  <a href="https://www.youtube.com/watch?v=RW03ahBWhuY" className="btn btn-danger">Ver en youtube</a>
                </div>
              </div>
              <div className="card">
                <div className="recomendacion_body card-body">
                <iframe id="ytplayer" src="https://www.youtube.com/embed/ZGgDpx4Wg-U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                </div>
                <div className="card-footer">
                  <a href="https://www.youtube.com/watch?v=ZGgDpx4Wg-U" className="btn btn-danger">Ver en youtube</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
        <div id="footer_cell">
        <nav className="footer_nav_cell">
          <ul>
            <li><Link to="/"><img src={ home_icon } width="30px"></img></Link></li>
            <li><Link to="/standup"><img src={ stand_up_icon } width="30px"></img></Link></li>
          </ul>
        </nav>
        </div>
      </footer>
    </div>
  );
}

const videos = [];
const videos_para_mostrar = [];

class Video
{
    constructor(src, nacionalidad, duracion, canal, comediante)
    {
        this.src = src;
        this.nacionalidad = nacionalidad;
        this.duracion = duracion;
        this.canal = canal;
        this.comediante = comediante;
    }
}

function Recomendaciones() {
    return(
        <div>
            <div id="xd" className="card contenido">
                    <div className="curador_picks">
                        <div className="fila_1">
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/2kpIwYp08x8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=1sLsxZSRMsI" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/z3OGpqziuyo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=z3OGpqziuyo" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/2Keef-1FaXk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=2Keef-1FaXk&t=56s" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                        </div>
                        <div className="fila_1">
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/MzuGjn3nmmQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=MzuGjn3nmmQ&t=2s" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/kdlXRZY3Bi8 " frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=kdlXRZY3Bi8&t=253s" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/KC9pwGo5r94" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=KC9pwGo5r94" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                        </div>
                        <div className="fila_1">
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/H8wTVY_Cbww" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=H8wTVY_Cbww&t=294s" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/2kpIwYp08x8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=1sLsxZSRMsI" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/2kpIwYp08x8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=1sLsxZSRMsI" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
        </div>
    );
}

function MenuSearch() {
  return(
    <div className="card">
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Nacionalidad</label>
                <select className="form-control" id="select_nacionalidad">
                    <option>No importa</option>
                    <option>Colombia</option>
                    <option>Mexico</option>
                    <option>Argentina</option>
                    <option>Chile</option>
                    <option>Venezuela</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Duracion</label>
                <select className="form-control" id="select_duracion">
                    <option>No importa</option>
                    <option>0-5 minutos</option>
                    <option>6-10 minutos</option>
                    <option>11-15 minutos</option>
                    <option>15-30 minutos</option>
                    <option>+30 minutos</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Canal</label>
                <select className="form-control" id="select_canal">
                    <option>No importa</option>
                    <option>Con Animo de Ofender</option>
                    <option>Comedy Central</option>
                    <option>Franco Escamilla</option>
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Comediante</label>
                <select className="form-control" id="select_comediante">
                    <option>No importa</option>
                    <option>Fran Hevia</option>
                    <option>Ojitos de Huevo</option>
                    <option>Franco Escamilla</option>
                    <option>Camilo Sanchez</option>
                    <option>Deibis Cortez</option>
                </select>
            </div>
        </div>
  );
}

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showBuscar: true,
     }
  }

  handleBuscar() {
    this.setState({
      showBuscar: !this.state.showBuscar,
    })

    const nacionalidad = document.getElementById('select_nacionalidad').value;  
    const duracion = document.getElementById('select_duracion').value;  
    const canal = document.getElementById('select_canal').value;
    const comediante = document.getElementById('select_comediante').value;
  
    for (let i = 0; i < videos.length; i++) {
      const element = videos[i].src;
      if (videos[i].nacionalidad == nacionalidad) {
        if (videos[i].duracion == duracion) {
          if (videos[i].canal == canal) 
          {
            if (videos[i].comediante == comediante) 
            {
              videos_para_mostrar.push(element);
            } 
            else if(comediante == "No importa"){
              videos_para_mostrar.push(element);
            }
            else
            {
              console.log("No se encontraron videos");
            }
          } 
          else if(canal == "No importa"){
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          }
          else
          {
            console.log("No se encontraron videos");
          }
        } 
        else if(duracion == "No importa")
        {
          if (videos[i].canal == canal) 
          {
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } else if(canal == "No importa"){
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          }
          else{
            console.log("No se encontraron videos");
          }
        }
        else{
          console.log("No se encontraron videos");
        }
      } 
      else if(nacionalidad == "No importa"){
        if (videos[i].duracion == duracion) {
          if (videos[i].canal == canal) 
          {
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } 
          else if(canal == "No importa"){
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          }
          else{
            console.log("No se encontraron videos");
          }
        } 
        else if(duracion == "No importa")
        {
          if (videos[i].canal == canal) 
          {
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } else if(canal == "No importa"){
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          }
          else{
            console.log("No se encontraron videos");
          }
        }
        else{
          console.log("No se encontraron videos");
        }
      }
      else{
        console.log("No se encontraron videos");
      }
    }
  }

  render() { 
    const search_contenido = this.state.showBuscar ? <MenuSearch /> : <Mostrar_videos />;
    return ( 
      <div>
        {search_contenido}
        <div><button className="btn btn-outline-danger boton_buscarMas" onClick={() => this.handleBuscar()} type="submit">Buscar</button></div>
      </div>
     );
  }
}

function Mostrar_videos() {
  const contenido = videos_para_mostrar;
  for (let i = 0; i < contenido.length; i++) {
    var mostrar = contenido.map(function () {
      return(
        <div className="card">
          <div className="recomendacion_body card-body">
            <iframe id="ytplayer" src={contenido[i]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
          </div>
        </div>
      );
    })
  }
  return(
      <div>
        <div>
          <div className="curador_picks">
            <div className="fila_1">
              {mostrar}
            </div>
          </div>
        </div>
    </div>
  );
}

videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla") );

class Stand extends Component{
    constructor(props){
        super(props);
        this.state = {
            show: true,
        }
    }

    handleClick(){
        this.setState({
            show: !this.state.show,
        })
    }

    render(){
        const contenido = this.state.show ? <Recomendaciones /> : <Search />;
        const status = this.state.show ? "Buscar" : "Volver atras";
        return(
            <div>
                <div id="body">
                    <div className="card">
                        <div className="card-header text-center">Te lo recomendamos</div>
                        <div><button type="button" className="btn btn-outline-danger boton_buscarMas" onClick={()=>this.handleClick()}>{status}</button></div>
                    </div>
                    <div >
                        {contenido}
                    </div>
                </div>
                <footer>
                    <div id="footer_cell">
                    <nav className="footer_nav_cell">
                    <ul>
                        <li><Link to="/"><img src={ home_icon } width="30px"></img></Link></li>
                        <li><Link to="/standup"><img src={ stand_up_icon_naranja } width="30px"></img></Link></li>
                    </ul>
                    </nav>
                    </div>
                </footer>
            </div>
        )
    }
}


export default App;
