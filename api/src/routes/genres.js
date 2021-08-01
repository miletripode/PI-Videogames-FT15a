/*[ ] GET /genres:
Obtener todos los tipos de géneros de videojuegos posibles
En una primera instancia deberán traerlos desde rawg y 
guardarlos en su propia base de datos y luego ya utilizarlos desde allí*/

const { Genre } = require('../db');
var express = require ('express');
const router = express.Router();
const {API_KEY} = process.env;
const genresUrl = `https://api.rawg.io/api/genres?key=${API_KEY}`

router.get('/', async (req, res) => {
    const infoApi = await getApiInfo()
    const occupations = infoApi.map(o => o.occupation).flat()

    occupations.forEach(o => {
        Occupation.findOrCreate({
            where: {
                name: o
            }
        })
    })

    let allOccupations = await Occupation.findAll({
        attributes: ['name']
    })

    allOccupations = allOccupations.map(a => a.name).sort()
    
    res.send(allOccupations)
})

module.exports = router;