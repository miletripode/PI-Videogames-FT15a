const axios = require('axios');
const {API_KEY} = process.env;
const apiUrl = `https://api.rawg.io/api/games?key=${API_KEY}`;

const getApiInfo = async () =>{
    const apiInfo = await axios.get(apiUrl)
    const apiData = apiInfo.data.results.map(v => {
        return {
            platforms: v.platforms.map(g => g.platform.name)
        }
    })
    return apiData.flat();
}

module.exports = getApiInfo;