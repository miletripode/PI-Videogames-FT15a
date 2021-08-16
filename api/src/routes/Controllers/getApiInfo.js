const axios = require('axios');
const {API_KEY} = process.env;
const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getApiInfo = async () =>{
    const apiInfo = await axios.get(apiUrl)
    const apiData = apiInfo.data.results.map(v => {
        return {
            id: v.id,
            name: v.name,
            image: v.background_image,
            genres: v.genres.map(g => g.name),
            platforms: v.platforms.map(g => g.platform.name),
            rating: v.rating
        }
    })
    return apiData;
}

module.exports = getApiInfo;