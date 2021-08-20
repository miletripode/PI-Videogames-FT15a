
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { getAllVideoGames, orderAlphabetically, orderByRating, 
getGenres, filterByGenre, filterCreated } from '../actions/index';
import Card from './Card'
import './Home.css'
import Page from "./Page";
import NavBar from './NavBar';

export default function Home(){

    const dispatch = useDispatch();

    const allVideoGames = useSelector(state => state.videogames)
    const allGenres = useSelector(state => state.genres)

    const [loading, setLoading] = useState(false);

    const [currentPage,setCurrentPage] = useState(1);
    const [videogamesPerPage,setVideogamesPerPage]= useState(9);
    const indexOfLastVideogame = currentPage * videogamesPerPage; 
    const indexOfFirstVideogame = indexOfLastVideogame - videogamesPerPage; 
    const currentVideogames = allVideoGames.slice(indexOfFirstVideogame,indexOfLastVideogame)
    
    const [orden, setOrden] = useState('')

    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
    }; 

    function handleSort (e){
        e.preventDefault();
        dispatch(orderAlphabetically(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSortRating (e){
        e.preventDefault();
        dispatch(orderByRating(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleSelectGenres (e){
        e.preventDefault();
        dispatch(filterByGenre(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };
    function handleSelectCreated (e){
        e.preventDefault();
        dispatch(filterCreated(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    };

    function handleOnClick(e){
        e.preventDefault()
        dispatch(getAllVideoGames())
    }
      
    useEffect(() => {
        dispatch(getAllVideoGames()); 
        dispatch(getGenres());
        setLoading(true);
        setTimeout(()=>{setLoading(false)},5000);
    }, [])

    return (
        <div className='home'>
            <NavBar/>
            <nav className='navBar'>
            <ul>
            <li>
                <select onChange={e => handleSort(e)}>
                <option value=''>Alphabetically</option>
                <option value='az'>A-Z</option>
                <option value='za'>Z-A</option>
                </select>
            </li>
            <li>
                <select onChange={e => handleSelectGenres(e)}>
                <option value=''>Genres</option>
                {allGenres.map((g) => (
                <option value={g.name}>{g.name}</option>
                ))}
                </select>
            </li>
            <li>
                <select onChange={e => handleSortRating(e)}>
                <option value=''>Rating</option>
                <option value='des'>Highest Rating</option>
                <option value='asc'>Lowest Rating</option>
                </select>
            </li>
            <li>
                <select onChange={e => handleSelectCreated(e)}>
                <option value=''>From</option>
                <option value='created'>Created</option>
                <option value='api'>Api</option>
                </select>
            </li>
            <li><button className='refresh' onClick={(e) => {
           handleOnClick(e)}}>Refresh</button></li>
            </ul>
        </nav>
        <div className='page'>
        <Page
            videogamesPerPage={videogamesPerPage}
            allVideoGames={allVideoGames.length} 
            paginado={paginado}
        />
        </div>
        <div>
            { loading ? ( <div class="loading">Loading...</div>) : 
            (currentVideogames && currentVideogames.map(v => 
            <Card id={v.id} 
            rating={v.rating}
            img={v.image ? v.image : "https://wallpapercave.com/wp/wp8824374.jpg"} 
            name={v.name} 
            genres={!v.hasOwnProperty('createdInDataBase') ? 
            v.genres.map(e => e+' \n ') : v.genres.map(e => e.name + ('\n'))}/>
            ))}
        </div>
        <br></br>
        </div>
    )
}