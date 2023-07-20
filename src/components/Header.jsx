//Importation de REACT 
import React from 'react'
import {Link} from 'react-router-dom';

//Importation du CSS
import '../styles/styles_components/header/header.css'

//Importation des assets
import Logo from '../assets/logo.png'

function Header(){
    return (
        <header>
            <Link to="/portfolio/"><img src={Logo} alt={Logo} id='logo'/></Link>
            <ul className='header_list'>
                <Link to="/a_propos/"><li>A propos de moi</li></Link>
                <Link to="/projets/"><li>Mes projets</li></Link>
                <Link to="/contact/"><li>Contact</li></Link>
            </ul>
        </header>
    )
}

export default Header