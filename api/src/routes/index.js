const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = require('./videogames')
const genresRouter = require('./genres')
const videogameRouter = require('./videogame')
const platformsRouter = require('./platforms')
/*

[ ] POST /videogame:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
Crea un videojuego en la base de datos*/


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogamesRouter)
router.use('/genres', genresRouter)
router.use('/videogame', videogameRouter)
router.use('/platforms', platformsRouter)

module.exports = router;
