import React from 'react';
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { getAllVideoGames } from '../actions';
import './SearchBar.css'
 
export default function SearchBar (){
    const dispatch = useDispatch()
    const [name,setName] = useState("")
    
    function handleInputChange(e){
    e.preventDefault()
    setName(e.target.value)
    }
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(getAllVideoGames(name))
    }
    
    return (
        <div className='searchContainer'>
            <input className='input'
            type = 'text'
            placeholder = "Search..."
            onChange = {(e) => handleInputChange(e)}
            />
            <button className='btnSubmit' type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}