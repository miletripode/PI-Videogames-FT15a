const initialState = {
    videogames: [],
    videogameDetail: {},
    genres: [],
    platforms: [],
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
        case 'GET_VIDEOGAME_DETAIL': 
        return {
            ...state,
            videogameDetail: action.payload
        }
        case 'GET_VIDEOGAMES_BY_NAME': 
        return {
            ...state,
            videogames: action.payload
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
        case 'ORDER_ALPHABETICALLY':
           let sortedArray = action.payload === 'az' ? 
           state.videogames.sort(function(a,b){
               if(a.name > b.name){
                   return 1
               }
               if(b.name > a.name){
                   return -1
               }
               return 0
           }) : 
           state.videogames.sort(function(a,b){
            if(a.name > b.name){
                return -1
            }
            if(b.name > a.name){
                return 1
            }
            return 0
        }) 
        return{
            ...state,
            videogames: sortedArray
        }
        case 'ORDER_BY_RATING':
           let arrayByRating = action.payload === 'asc' ? 
           state.videogames.sort(function(a,b){
               if(a.rating > b.rating){
                   return 1
               }
               if(b.rating > a.rating){
                   return -1
               }
               return 0
           }) : 
           state.videogames.sort(function(a,b){
            if(a.rating > b.rating){
                return -1
            }
            if(b.rating > a.rating){
                return 1
            }
            return 0
        }) 
        return{
            ...state,
            videogames: arrayByRating
        }
        
        default: return state
    }
}