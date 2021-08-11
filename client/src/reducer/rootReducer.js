const initialState = {
    videogames: [],
    allVideogames: [],
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
            videogames: action.payload,
            allVideogames: action.payload
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
           state.allVideogames.sort(function(a,b){
               if(a.name > b.name){
                   return 1
               }
               if(b.name > a.name){
                   return -1
               }
               return 0
           }) : 
           state.allVideogames.sort(function(a,b){
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
           state.allVideogames.sort(function(a,b){
               if(a.rating > b.rating){
                   return 1
               }
               if(b.rating > a.rating){
                   return -1
               }
               return 0
           }) : 
           state.allVideogames.sort(function(a,b){
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
        case 'FILTER_BY_GENRE':
            let filtered = state.allVideogames.filter(f => {
                if(f.hasOwnProperty('createdInDataBase')){
                    let aux = f.genres.map(g => g.name).toString()
                    if(aux.includes(action.payload)){
                        return f
                    }
                }
                else{
                    if(f.genres.includes(action.payload)){
                        return f
                    }
                }
            })
            return{
                ...state,
                videogames: filtered
            }
        case 'FILTER_CREATED':
            let filterCreated = action.payload == 'created' ? 
            state.allVideogames.filter(f => f.hasOwnProperty('createdInDataBase')) 
            :
            state.allVideogames.filter(f => !f.hasOwnProperty('createdInDataBase'))
            return{
                ...state,
                videogames: filterCreated
            }
        
        default: return state
    }
}