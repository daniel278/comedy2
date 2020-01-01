import React, { Component } from 'react';
import './index.css';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import logo_negro_svg from './assets/img/logo/yula_negro.svg';
import logo_svg from './assets/img/logo/yula.svg';
import home_icon from './assets/img/home_icon_2.png';
import home_icon_naranja from './assets/img/home_icon_naranja.png';
import stand_up_icon from './assets/img/stand_up_icon_2.png';
import etc_icon from './assets/img/etc_icon.png';
import etc_icon_naranja from './assets/img/etc_icon_naranja.png';
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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/standup">stand up</Link></li>
                <li><Link to="/etc">Etc</Link></li>
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

          <Route exact path="/etc">
            <Etc />
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
            <li><Link to="/"><img src={ home_icon_naranja } width="30px"></img></Link></li>
            <li><Link to="/standup"><img src={ stand_up_icon } width="30px"></img></Link></li>
            <li><Link to="/etc"><img src={ etc_icon } width="30px"></img></Link></li>
          </ul>
        </nav>
        </div>
      </footer>
    </div>
  );
}

const videos = [];
const videos_para_mostrar = [];
const ytsrc_videos_para_mostrar = [];

class Video
{
    constructor(src, nacionalidad, duracion, canal, comediante, ytsrc)
    {
        this.src = src;
        this.nacionalidad = nacionalidad;
        this.duracion = duracion;
        this.canal = canal;
        this.comediante = comediante;
        this.ytsrc = ytsrc;
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
                                <a href="https://www.youtube.com/watch?v=H8wTVY_Cbww&t" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
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
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/xQpAUDkOhlA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=xQpAUDkOhlA" className="btn btn-danger">Ver en youtube</a>
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
      const ytelement = videos[i].ytsrc;
      if (videos[i].nacionalidad == nacionalidad) {
        if (videos[i].duracion == duracion) {
          if (videos[i].canal == canal) 
          {
            if (videos[i].comediante == comediante) 
            {
              videos_para_mostrar.push(element);
              ytsrc_videos_para_mostrar.push(ytelement);
            } 
            else if(comediante == "No importa"){
              videos_para_mostrar.push(element);
              ytsrc_videos_para_mostrar.push(ytelement);
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
            ytsrc_videos_para_mostrar.push(ytelement);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
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
            ytsrc_videos_para_mostrar.push(ytelement);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } else if(canal == "No importa"){
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
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
            ytsrc_videos_para_mostrar.push(ytelement);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
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
            ytsrc_videos_para_mostrar.push(ytelement);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
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
            ytsrc_videos_para_mostrar.push(ytelement);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } else if(canal == "No importa"){
            if (videos[i].comediante == comediante) 
          {
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
          } 
          else if(comediante == "No importa"){
            videos_para_mostrar.push(element);
            ytsrc_videos_para_mostrar.push(ytelement);
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
  const ytcontenido = ytsrc_videos_para_mostrar;
  const  mostrar = contenido.map(function (todo, index) {   
    console.log(todo);
       
      return(
        <div className="card resultado_busqueda" key={todo}>
          <div className="card-body resultado_busqueda_body recomendacion_body">
            <iframe id="ytplayer" src={contenido[index]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
          </div>
          <div className="card-footer">
            <a href={ytcontenido[index]} className="btn btn-danger">Ver en youtube</a>
          </div>
        </div>
      );
    })
  return(
      <div>
        <div>
          <div className="contenido">
            <div className="curador_picks">
              {mostrar}
            </div>
          </div>
        </div>
    </div>
  );
}


//Con Animo de ofender - 7 Videos
//Comedy Central - 10 Videos
//Franco Escamilla - 5 Videos
//Otros -25 Videos // -5 Venezuela -5 Argentina -5 Chile -5 Ecuador -5 Mexicano

videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla", "https://www.youtube.com/watch?v=bXcqSRzo6YI&t") );
videos.push( new Video("https://www.youtube.com/embed/zasRGidzwOg", "Colombia", "0-5 minutos", "Comedy Central", "Otros", "https://www.youtube.com/watch?v=zasRGidzwOg") );
videos.push( new Video("https://www.youtube.com/embed/6g8veZSCevM", "Colombia", "0-5 minutos", "Con Animo de Ofender", "Deibis Cortes", "https://www.youtube.com/watch?v=6g8veZSCevM") );
videos.push( new Video("https://www.youtube.com/embed/eHXHknVDTK4", "Venezuela", "+30 minutos", "Otros", "Otros", "https://www.youtube.com/watch?v=eHXHknVDTK4&t") );
videos.push( new Video("https://www.youtube.com/embed/xpGUU0BZhRw", "Mexico", "11-15 minutos", "Comedy Central", "Carlos Ballarta", "https://www.youtube.com/watch?v=xpGUU0BZhRw") );
videos.push( new Video("https://www.youtube.com/embed/xQpAUDkOhlA", "Argentina", "6-10 minutos", "Otros", "Otros", "https://www.youtube.com/watch?v=xQpAUDkOhlA") );
videos.push( new Video("https://www.youtube.com/embed/zIl9ZI4lFuY", "Venezuela", "+30 minutos", "Otros", "Otros", "https://www.youtube.com/watch?v=zIl9ZI4lFuY&t") );
videos.push( new Video("https://www.youtube.com/embed/omGF6Ps9Nog", "Mexico", "+30 minutos", "Otros", "Ricardo O'Farrill", "https://www.youtube.com/watch?v=omGF6Ps9Nog") );
videos.push( new Video("https://www.youtube.com/embed/SbJEaHUimrY", "Mexico", "+30 minutos", "Franco Escamilla", "Franco Escamilla", "https://www.youtube.com/watch?v=SbJEaHUimrY&t") );
videos.push( new Video("https://www.youtube.com/embed/E4HB80JGO9E", "Colombia", "0-5 minutos", "Con Animo de Ofender", "Otros", "https://www.youtube.com/watch?v=E4HB80JGO9E&t") );
videos.push( new Video("https://www.youtube.com/embed/_AAqUamNQA0", "Colombia", "0-5 minutos", "Con Animo de Ofender", "Otros", "https://www.youtube.com/watch?v=_AAqUamNQA0") );
videos.push( new Video("https://www.youtube.com/embed/0H4xKqMJRFo", "Colombia", "11-15 minutos", "Comedy Central", "Otros", "https://www.youtube.com/watch?v=0H4xKqMJRFo") );
videos.push( new Video("https://www.youtube.com/embed/Z8UA30qFVak", "Mexico", "11-15 minutos", "Franco Escamilla", "Franco Escamilla", "https://www.youtube.com/watch?v=Z8UA30qFVak") );
videos.push( new Video("https://www.youtube.com/embed/ZkVj_boxQ8U", "Mexico", "+30 minutos", "Otros", "Otros", "https://www.youtube.com/watch?v=ZkVj_boxQ8U"));
videos.push( new Video("https://www.youtube.com/embed/z0cq0VQReUA", "Colombia", "6-10 minutos", "Con Animo de Ofender", "Otros", "https://www.youtube.com/watch?v=z0cq0VQReUA&t=") );
videos.push( new Video("https://www.youtube.com/embed/nDJjLLwgFDI", "Mexico", "11-15 minutos", "Comedy Central", "Franco Escamilla", "https://www.youtube.com/watch?v=nDJjLLwgFDI") );
videos.push( new Video("https://www.youtube.com/embed/3WyKwsRutSw", "Colombia", "6-10 minutos", "Con Animo de Ofender", "Otros", "https://www.youtube.com/watch?v=3WyKwsRutSw&t") );

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
                        <li><Link to="/etc"><img src={ etc_icon } width="30px"></img></Link></li>
                    </ul>
                    </nav>
                    </div>
                </footer>
            </div>
        )
    }
}


const videos_etc = [];
const videos_para_mostrar_etc = [];
const ytsrc_videos_para_mostrar_etc = [];

class Video_etc
{
    constructor(src, nacionalidad, duracion, canal, categoria, ytsrc)
    {
        this.src = src;
        this.nacionalidad = nacionalidad;
        this.duracion = duracion;
        this.canal = canal;
        this.categoria = categoria;
        this.ytsrc = ytsrc;
    }
}

function Recomendaciones_etc() {
    return(
        <div>
            <div id="xd" className="card contenido">
                    <div className="curador_picks">
                        <div className="fila_1">
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/v8KWyLEMFn8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=v8KWyLEMFn8&t" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/TAHXmgXt-9E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=TAHXmgXt-9E" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/ZZmfJxtElOc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=ZZmfJxtElOc" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                        </div>
                        <div className="fila_1">
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/JDaU1E_Mk2M" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=JDaU1E_Mk2M" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/Jonq3q7yd6s" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=Jonq3q7yd6s" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/WWukDTlTHlY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=WWukDTlTHlY" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                        </div>
                        <div className="fila_1">
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/W6iBwy4yrVM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=W6iBwy4yrVM" className="btn btn-danger">Ver en youtube</a>
                                </div>
                            </div>
                            <div className="card">
                                <div className="recomendacion_body card-body">
                                <iframe id="ytplayer" src="https://www.youtube.com/embed/OIPPJK7c6h8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
                                </div>
                                <div className="card-footer">
                                <a href="https://www.youtube.com/watch?v=OIPPJK7c6h8" className="btn btn-danger">Ver en youtube</a>
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
        </div>
    );
}

function MenuSearch_etc() {
  return(
    <div className="card">
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Categoria</label>
                <select className="form-control" id="select_categoria_etc">
                    <option>No importa</option>
                    <option>Entrevista</option>
                    <option>Podcast</option>
                    <option>No se como clasificarlo</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Nacionalidad</label>
                <select className="form-control" id="select_nacionalidad_etc">
                    <option>No importa</option>
                    <option>Colombia</option>
                    <option>Mexico</option>
                    <option>Venezuela</option>
                    <option>Argentina</option>
                    <option>Chile</option>
                    <option>Estados Unidos</option>
                    <option>Otros</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Duracion</label>
                <select className="form-control" id="select_duracion_etc">
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
                <select className="form-control" id="select_canal_etc">
                    <option>No importa</option>
                    <option>Con Animo de Ofender</option>
                    <option>Comedy Central</option>
                    <option>Escuela de nada</option>
                    <option>Juanpis Gonzales</option>
                    <option>Vete a la versh</option>
                    <option>enchufetv</option>
                    <option>NEGAS</option>
                    <option>Otros</option>
                </select>
            </div>
        </div>
  );
}

class Search_etc extends Component {
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

    const nacionalidad = document.getElementById('select_nacionalidad_etc').value;  
    const duracion = document.getElementById('select_duracion_etc').value;  
    const canal = document.getElementById('select_canal_etc').value;
    const categoria = document.getElementById('select_categoria_etc').value;

    for (let i = 0; i < videos_etc.length; i++) {
      const element = videos_etc[i].src;
      const ytelement = videos_etc[i].ytsrc;
      if (videos_etc[i].nacionalidad_etc == nacionalidad) {
        if (videos_etc[i].duracion_etc == duracion) {
          if (videos_etc[i].canal_etc == canal) 
          {
            if (videos_etc[i].categoria == categoria) 
            {
              videos_para_mostrar_etc.push(element);
              ytsrc_videos_para_mostrar_etc.push(ytelement);
            } 
            else if(categoria == "No importa"){
              videos_para_mostrar_etc.push(element);
              ytsrc_videos_para_mostrar_etc.push(ytelement);
            }
            else
            {
              console.log("No se encontraron videos");
            }
          } 
          else if(canal == "No importa"){
            if (videos_etc[i].categoria == categoria) 
          {
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          } 
          else if(categoria == "No importa"){
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
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
          if (videos_etc[i].canal == canal) 
          {
            if (videos_etc[i].categoria == categoria) 
          {
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          } 
          else if(categoria == "No importa"){
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } else if(canal == "No importa"){
            if (videos_etc[i].categoria == categoria) 
          {
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          } 
          else if(categoria == "No importa"){
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
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
        if (videos_etc[i].duracion == duracion) {
          if (videos_etc[i].canal == canal) 
          {
            if (videos_etc[i].categoria == categoria) 
          {
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          } 
          else if(categoria == "No importa"){
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } 
          else if(canal == "No importa"){
            if (videos_etc[i].categoria == categoria) 
          {
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          } 
          else if(categoria == "No importa"){
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
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
          if (videos_etc[i].canal == canal) 
          {
            if (videos_etc[i].categoria == categoria) 
          {
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          } 
          else if(categoria == "No importa"){
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          }
          else
          {
            console.log("No se encontraron videos");
          }
          } else if(canal == "No importa"){
            if (videos_etc[i].categoria == categoria) 
          {
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
          } 
          else if(categoria == "No importa"){
            videos_para_mostrar_etc.push(element);
            ytsrc_videos_para_mostrar_etc.push(ytelement);
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
    const search_contenido = this.state.showBuscar ? <MenuSearch_etc /> : <Mostrar_videos_etc />;
    return ( 
      <div>
        {search_contenido}
        <div><button className="btn btn-outline-danger boton_buscarMas" onClick={() => this.handleBuscar()} type="submit">Buscar</button></div>
      </div>
     );
  }
}

function Mostrar_videos_etc() {  
  const contenido = videos_para_mostrar_etc;
  const ytcontenido = ytsrc_videos_para_mostrar_etc;
  const  mostrar = contenido.map(function (todo, index) {   
    console.log(todo);
       
      return(
        <div className="card resultado_busqueda" key={todo}>
          <div className="card-body resultado_busqueda_body recomendacion_body">
            <iframe id="ytplayer" src={contenido[index]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>              
          </div>
          <div className="card-footer">
            <a href={ytcontenido[index]} className="btn btn-danger">Ver en youtube</a>
          </div>
        </div>
      );
    })
  return(
      <div>
        <div>
          <div className="contenido">
            <div className="curador_picks">
              {mostrar}
            </div>
          </div>
        </div>
    </div>
  );
}

videos_etc.push( new Video_etc("https://www.youtube.com/embed/TAHXmgXt-9E", "Venezuela", "+30 minutos", "Escuela de nada", "Podcast", "https://www.youtube.com/watch?v=TAHXmgXt-9E") );
videos_etc.push( new Video_etc("https://www.youtube.com/embed/v8KWyLEMFn8", "Colombia", "16-20 minutos", "Con Animo de Ofender", "Con Animo de Ofender", "https://www.youtube.com/watch?v=v8KWyLEMFn8&t=401s") );
videos_etc.push( new Video_etc("https://www.youtube.com/embed/kzbHbMiLow8", "Colombia", "+30 minutos", "Juanpis Gonzales", "Entrevista", "https://www.youtube.com/watch?v=kzbHbMiLow8") );
videos_etc.push( new Video_etc("https://www.youtube.com/embed/_tzLxEcvqEQ", "Mexico", "0-5 minutos", "Vete a la versh", "Animacion", "https://www.youtube.com/watch?v=_tzLxEcvqEQ") );
videos_etc.push( new Video_etc("https://www.youtube.com/embed/7uhjdUDXMh8", "Colombia", "16-20 minutos", "Con Animo de Ofender", "Con Animo de Ofender", "https://www.youtube.com/watch?v=7uhjdUDXMh8&t=565s") );
videos_etc.push( new Video_etc("https://www.youtube.com/embed/vThOpUjwswg", "Mexico", "0-5 minutos", "NEGAS", "Animacion", "https://www.youtube.com/watch?v=vThOpUjwswg"));
videos_etc.push( new Video_etc("https://www.youtube.com/embed/CYo_RI6dfB0", "Venezuela", "+30 minutos", "Escuela de nada", "Podcast", "https://www.youtube.com/watch?v=CYo_RI6dfB0") );
videos_etc.push( new Video_etc("https://www.youtube.com/embed/XN-rQ0DvKVQ", "Ecuador", "6-10 minutos", "enchufetv", "sketch", "https://www.youtube.com/watch?v=XN-rQ0DvKVQ&t=1s"));


class Etc extends Component{
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
        const contenido = this.state.show ? <Recomendaciones_etc /> : <Search_etc />;
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
                        <li><Link to="/standup"><img src={ stand_up_icon } width="30px"></img></Link></li>
                        <li><Link to="/etc"><img src={ etc_icon_naranja } width="30px"></img></Link></li>
                    </ul>
                    </nav>
                    </div>
                </footer>
            </div>
        )
    }
}

export default App;