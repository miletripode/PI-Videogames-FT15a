/*[ ] GET /videogames:
Obtener un listado de los videojuegos
Debe devolver solo los datos necesarios para la ruta principal*/

/*[ ] GET /videogames?name="...":
Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
Si no existe ningún videojuego mostrar un mensaje adecuado*/

const axios = require('axios');
const { Videogame, Genre } = require('../db');
var express = require ('express');
const router = express.Router();
const getAllVideoGames = require('./Controllers/getAllVideoGames');
const {API_KEY} = process.env;
const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`

router.get('/', async (req, res) => {
    let name = req.query.name;
    let allGames = await getAllVideoGames();
    if(name){
        let gamesByName = await axios.get(`${apiUrl}&search=${name}`)
        gamesByName = gamesByName.data.results.map(v => {
            return {
                id: v.id,
                name: v.name,
                image: v.background_image,
                genres: v.genres.map(g => g.name)
            }
        });
        gamesByName.length ? 
        res.status(200).send(gamesByName) :
        res.status(404).send('Does not exist games')
    }
    else{
        res.status(200).send(allGames)
    }
})

module.exports = router