import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchBar from './SearchBar';
import './NavBar.css'

export default function NavBar(){
   return(
      <div className="navbar">
         <nav>
            <ul>
            <li><NavLink className="nav-link" exact to="/">Inicio</NavLink></li>
            <li> <NavLink className='nav-link' to='/create'>Create Videogame</NavLink></li>
            <li><SearchBar/></li>
            </ul>
         </nav>
      </div>
   );
};