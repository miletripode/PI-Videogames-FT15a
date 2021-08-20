/*[ ] GET /platforms:
Obtener todos los tipos de plataformas existentes*/
var express = require ('express');
const router = express.Router();
const getApiInfo = require('./Controllers/getApiInfo')

router.get('/', async (req, res, next) => {
    try{
        let platforms = await getApiInfo()
        
        let mySet = new Set(platforms)
        platforms= Array.from(mySet)
        
        res.send(platforms)
    }
    catch(e){
        next(e)
    }
    
})

module.exports = router