import React from 'react';
import {NavLink} from 'react-router-dom';
import './Card.css'

export default function Card({img, name, genres}){
    return (
        <div className='container'>
            
            <div>
                <img className='image' src={img} />
            </div>
            <div className='subcontainer'>
                <div>
                    <NavLink className='navlink' to='/detail'><h1>{name}</h1></NavLink>
                </div>
                <div className='genres'>
                    {genres}
                </div>
            </div>
        </div>
    )
}