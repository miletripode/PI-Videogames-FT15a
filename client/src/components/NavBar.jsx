import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavBar.css';
import SearchBar from './SearchBar';

export default function NavBar(){
   return(
      <div className="navbar">
            <li><NavLink className="nav-link" exact to="/">Inicio</NavLink></li>
            <li> <NavLink className='nav-link' to='/home'>Home</NavLink></li>
            <li> <NavLink className='nav-link' to='/create'>Create Videogame</NavLink></li>
            <SearchBar/>
      </div>
   );
};