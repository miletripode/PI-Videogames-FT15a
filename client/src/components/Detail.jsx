import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail } from "../actions/index";
import { useEffect } from "react";
import './Detail.css'
import NavBar from "./NavBar";

export default function Detail(props){


const myVideogame = useSelector ((state) => state.videogameDetail)
const dispatch = useDispatch()

const id = props.match.params.id
useEffect(() => {
    dispatch(getVideogameDetail(id));
},[])
return (
    <div className='general'>
        <NavBar></NavBar>
        <img className='imgDetail' src= {myVideogame.image ? myVideogame.image : "https://wallpapercave.com/wp/wp8824374.jpg"}/>
        <div className='containerDetail'>
            <h1>{myVideogame.name}</h1>
            <h2>Released: {myVideogame.released}</h2>
            <h2>Rating: {myVideogame.rating}</h2>
            <h2>Platforms: {myVideogame.platforms + ' '}</h2>
            <h2>Description:  {myVideogame.description}</h2>
            <h2>Genres: {!myVideogame.createdInDataBase ? myVideogame.genres + ' '  : myVideogame.genres.map(e => e.name + ' ')}</h2>
        </div>
    </div>
)
}