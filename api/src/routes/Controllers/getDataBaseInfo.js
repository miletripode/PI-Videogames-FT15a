const axios = require('axios');
const { Videogame, Genre } = require('../../db');
var express = require ('express');
const router = express.Router();

const getDataBaseInfo = async () => {
    return await Videogame.findAll({
        attributes: ['id', 'name', 'image'],
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

module.exports = getDataBaseInfo;