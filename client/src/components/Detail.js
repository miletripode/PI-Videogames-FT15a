import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail } from "../actions/index";
import { useEffect } from "react";
import './Detail.css'

export default function Detail(props){


const myVideogame = useSelector ((state) => state.videogameDetail)
const dispatch = useDispatch()

const id = props.match.params.id
useEffect(() => {
    dispatch(getVideogameDetail(id));
},[])
return (
    <div className='general'>
        <Link to= '/home'>
            <button>Volver</button>
        </Link>
        <div className='containerDetail'>
            <img className='imgDetail' src= {myVideogame.image}/>
            <h1>{myVideogame.name}</h1>
            <h2>Released: {myVideogame.released}</h2>
            <h3>Genres: {!myVideogame.createdInDb ? myVideogame.genres + ' ' : myVideogame.genres.map(e => e.name + (' '))}</h3>
            <br/>
            <h4>Description</h4>
            <h4>{myVideogame.description}</h4>
        </div>
    </div>
)
}