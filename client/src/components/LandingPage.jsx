
import React from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css'

export default function LandingPage(){
    return (
        <div>
            <div className='background-image'></div>
            <div className='buttonContainer'>
                <NavLink to='/home'>
                    <button className="welcome">Welcome!</button>
                </NavLink>
            </div>
        </div>
        
    )
}