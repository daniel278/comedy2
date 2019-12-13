import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../index.css';
import home_icon from '../assets/img/home_icon_2.png';
import stand_up_icon from '../assets/img/stand_up_icon_naranja.png';
import etc_icon from '../assets/img/etc_icon.png';
import cado from '../assets/img/cado_logo.png';

class Stand extends Component{
    render(){
        return(
            <div>
                <div id="body">
                    <div className="card-header">Te lo recomendamos xd</div>
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