const initialState = {
    videogames: [],
    videogamesByGenre: [],
    genres: [],
    platforms: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'POST_VIDEOGAME':
        return {
            ...state
        }
        case 'GET_VIDEOGAMES': 
        return {
            ...state,
            videogames: action.payload
        }
        case 'GET_VIDEOGAMES_BY_NAME': 
        return {
            ...state,
            videogamesByName: action.payload
        }
        case 'GET_GENRES':
        return {
            ...state,
            genres: action.payload
        }
        case 'GET_PLATFORMS':
        return {
            ...state,
            platforms: action.payload
        }
        default: return state
    }
}