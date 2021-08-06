
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllVideoGames } from '../actions/index';
import {NavLink} from 'react-router-dom';
import Card from './Card'
import './Home.css'

export default function Home(){

    const dispatch = useDispatch();

    const allVideoGames = useSelector(state => state.videogames)

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        dispatch(getAllVideoGames(), 
        setLoading(true),
        setTimeout(()=>{setLoading(false);},5000))
    }, [])

    function handleOnClick(e){
        e.preventDefault();
        dispatch(getAllVideoGames())
    }

    return (
        <div className='home'>
            <div>
                <NavLink className='nav-link' to='/create'>Create Videogame</NavLink>
            <div>
            <div>
                <select>
                    <option value='az'>A-Z</option>
                    <option value='za'>Z-A</option>
                </select>
                <select>
                    <option value='status'>Genre</option>
                    <option value='created'>Created</option>
                    <option value='existing'>Existing</option>
                </select>
            </div>
            </div>
                { loading ? ( <div class="loading">Loading...</div>) : 
                (allVideoGames && allVideoGames.map(v => 
                <Card img={v.image ? v.image : "https://wallpapercave.com/wp/wp8824374.jpg"} name={v.name} genres={!v.hasOwnProperty('createdInDataBase')? v.genres + ' ' : v.genres.map(e => e.name + (' '))}/>
                ))}
            </div>
        </div>
    )
}