import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import '../index.css';
import home_icon from '../assets/img/home_icon_2.png';
import stand_up_icon from '../assets/img/stand_up_icon_naranja.png';
import etc_icon from '../assets/img/etc_icon.png';
import cado from '../assets/img/cado_logo.png';

const videos = [];

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

videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );
videos.push( new Video("https://www.youtube.com/embed/bXcqSRzo6YI", "Mexico", 11, "Comedy Central", "Franco Escamilla") );


class Stand extends Component{
    render(){
        return(
            <div>
                <div id="body">
                    <div className="card">
                        <div className="card-header text-center">Te lo recomendamos</div>
                    </div>
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
        )
    }
}

export default Stand;