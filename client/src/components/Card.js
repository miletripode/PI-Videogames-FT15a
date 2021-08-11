import React from 'react';
import {NavLink} from 'react-router-dom';
import './Card.css'

export default function Card({img, name, genres, id}){
    return (
        <div className='container'>
            <div>
                <NavLink className='navlink' to={`/detail/${id}`}>{name}</NavLink>
                
            </div>
            <div>
                <img className='image' src={img} />
            </div>
            <div className='genres'>
                {genres}
            </div>
        </div>
    )
}