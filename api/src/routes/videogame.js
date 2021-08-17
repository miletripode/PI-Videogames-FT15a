/*[ ] GET /videogame/{idVideogame}:
Obtener el detalle de un videojuego en particular
Debe traer solo los datos pedidos en la ruta de detalle de videojuego
Incluir los géneros asociados*/

const axios = require('axios');
const { Videogame, Genre } = require('../db');
var express = require ('express');
const router = express.Router();
const {API_KEY} = process.env;

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;

    try{
        if(id){
            if(!isNaN(id)){
                let videoGameDetail = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
                videoGameDetail = videoGameDetail.data
                videoGameDetail = {
                    id: videoGameDetail.id,
                    name: videoGameDetail.name,
                    image: videoGameDetail.background_image,
                    genres: videoGameDetail.genres.map(g => g.name),
                    platforms: videoGameDetail.platforms.map(g => g.platform.name),
                    description: videoGameDetail.description.replace( /(<([^>]+)>)/ig, ''),
                    released: videoGameDetail.released,
                    rating: videoGameDetail.rating
                }
                if(videoGameDetail){
                    return res.status(200).send(videoGameDetail)
                }
            }else{
                let videogame = await Videogame.findOne({
                    where: {id:id},
                    attributes: ['id', 'name', 'createdInDataBase', 'rating', 'description', 'released', 'platforms'],
                    include: {
                        model: Genre,
                        attributes: ['name'],
                        through: {
                            attributes: []
                        }
                    }
                })
                return res.status(302).send(videogame)
            }
        }
    }
    catch(e){
        next(e)
    }

   
})

router.post('/', async (req, res, next) => {
    try{
        let { name, description, released, rating, platforms, genres} = req.body
    
        let videogameCreated = await Videogame.create(
            { name, description, released, rating, platforms}
        )
    
        let genresDb = await Genre.findAll({
            where: {name: genres}
        })
    
        videogameCreated.addGenre(genresDb)

        res.send(302)
    }
    catch(e){
        next(e)
    }
   
})

module.exports = router;