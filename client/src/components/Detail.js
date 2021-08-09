import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail } from "../actions/index";
import { useEffect } from "react";

export default function Detail(props){


const myVideogame = useSelector ((state) => state.videogameDetail)
const dispatch = useDispatch()

const id = props.match.params.id
useEffect(() => {
    dispatch(getVideogameDetail(id));
},[])
return (
    <div>
            <div>
            {console.log(id)}
               <img src= {myVideogame.img}/>
               <h1>{myVideogame.name}</h1>
               <p>Cumpleaños: {myVideogame.released}</p>
               <h2>Status: {myVideogame.description}</h2>
               <h4>Ocupaciones: {!myVideogame.createdInDb ? myVideogame.genres + ' ' : myVideogame.genres.map(e => e.name + (' '))}</h4>
            </div>
        <Link to= '/home'>
            <button>Volver</button>
        </Link>
    </div>
)
}