const axios = require('axios');
const { Videogame, Genre } = require('../../db');
var express = require ('express');
const router = express.Router();
const getApiInfo = require('./getApiInfo')
const getDataBaseInfo = require('./getDataBaseInfo')

const getAllVideoGames = async () => {
    const gamesApi = await getApiInfo();
    const gamesDB = await getDataBaseInfo();
    const totalInfo = gamesDB.concat(gamesApi);
    return totalInfo;
}

module.exports = getAllVideoGames;