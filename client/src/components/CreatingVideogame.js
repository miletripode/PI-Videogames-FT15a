import React, {useState,useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {getGenres, getPlatforms, postVideogame} from '../actions/index'
import { useDispatch, useSelector } from 'react-redux';

import './CreatingVideogame.css'

export default function CreatingVideogame(){
    const history = useHistory()
    const dispatch = useDispatch()
    const genres = useSelector((state) => state.genres)
    const platforms = useSelector((state) => state.platforms)
    const [input,setInput] = useState({
        name: "",
        released: "",
        rating:"",
        description:"",
        platforms: [],
        genres:[],
    })
  
   function handleChange(e){
       setInput({
           ...input,
           [e.target.name] : e.target.value
       })
   }
    function handleSelect(e){
        setInput({
            ...input,
            genres: [...input.genres,e.target.value]
        })
    }
    function handleSelectPlatforms(e){
        setInput({
            ...input,
            platforms: [...input.platforms,e.target.value],
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch(postVideogame(input))
        alert("Videogame Created")
        setInput({
            name: "",
            released: "",
            rating:"",
            description:"",
            platforms: [],
            genres:[],
        })
        history.push('/home')
    }
    useEffect(() => {
        dispatch(getGenres());
        dispatch(getPlatforms())
    }, []);
return(
    <div >
        <div className='creating'>
        <form onSubmit={(e)=>handleSubmit(e)} className='form'>
            <h1>Create your videogames!</h1>
            <div>
                <label>Name:</label>
                <input
                type= "text"
                value= {input.name}
                name= "name"
                onChange={(e)=>handleChange(e)} 
                />
            </div>
            <div>
                <label>Released:</label>
                <input
                type= "text"
                value= {input.released}
                name= "released"
                onChange={(e)=>handleChange(e)} 
                />
            </div>
            <div>
                <label>Rating:</label>
                <input
                type= "text"
                value= {input.rating}
                name= "rating"
                onChange={(e)=>handleChange(e)} 
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                type= "text"
                value= {input.description}
                name= "description"
                onChange={(e)=>handleChange(e)} 
                />
            </div>
            <div>
            Genres
            <select onChange={(e) => handleSelect(e)}>
                {genres.map((g) => (
                    <option value={g.name}>{g.name}</option>
                ))}
            </select>
            <div>{input.genres.map(e => e + " ,")}</div>
            </div>
            <br/>
            <div>
            Platforms
            <select onChange={(e) => handleSelectPlatforms(e)}>
                {platforms.map((p) => (
                    <option value={p}>{p}</option>
                ))}
            </select>
            <div>{input.platforms.map(e => e + " ,")}</div>
            </div>
            <br/>
            <button className='btn' type='submit'>Create Videogame</button>​
        </form>
        </div>
    </div>
    )
}