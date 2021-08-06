/*[ ] GET /genres:
Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y 
guardarlos en su propia base de datos y luego ya utilizarlos desde allí*/
const axios = require('axios')
const { Genre } = require('../db');
var express = require ('express');
const router = express.Router();
const {API_KEY} = process.env;
const genresUrl = `https://api.rawg.io/api/genres?key=${API_KEY}`

router.get('/', async (req, res) => {
    const infoApi = await axios.get(genresUrl)
    const genres = infoApi.data.results.map(g => g.name)
    genres.forEach(g => {
        Genre.findOrCreate({
            where: {
                name: g
            }
        })
    })

    let allGenres = await Genre.findAll({
        attributes: ['name']
    })

    allGenres = allGenres.sort()
    
    res.send(allGenres)
})

module.exports = router;