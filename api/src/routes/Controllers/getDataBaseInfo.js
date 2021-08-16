const { Videogame, Genre } = require('../../db');


const getDataBaseInfo = async () => {
    
    let info = await Videogame.findAll({
        attributes: ['id', 'name', 'createdInDataBase', 'rating'],
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })

    return info
}

module.exports = getDataBaseInfo;