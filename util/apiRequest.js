const { default: axios } = require("axios")
require("dotenv").config()

async function getGiphy(query) {
  const rng = Math.floor(Math.random() * 40)
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY}&q=${query}&limit=50`
    )

    return response.data.data[rng].images.original.url
  } catch (error) {
    console.error(error)
  }
}

async function getWaifu(query) {
  try {
    const response = await axios.get(`https://api.waifu.pics/sfw/${query}`)
    return response.data.url
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getGiphy, getWaifu }
