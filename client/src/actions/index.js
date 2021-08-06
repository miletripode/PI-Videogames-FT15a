import axios from 'axios';

export function getAllVideoGames(name){
    if(name){
        return async function(dispatch){
            var json = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({type: 'GET_VIDEOGAMES_BY_NAME', payload: json.data})
        }
    }
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/videogames')
        return dispatch({type: 'GET_VIDEOGAMES', payload: json.data})
    }
}

export function getGenres(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/genres')
        return dispatch({type: 'GET_GENRES', payload: json.data})
    }
}

export function getPlatforms(){
    return async function(dispatch){
        var json = await axios.get('http://localhost:3001/platforms')
        return dispatch({type: 'GET_PLATFORMS', payload: json.data})
    }
}

export function postVideogame(payload){
    return async function(){
        const response = await axios.post('http://localhost:3001/videogame',payload)
        return response;
    }
}