const { default: axios } = require("axios")
require("dotenv").config()

async function getGiphy(query) {
  try {
    const response = await axios.get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY}&q=${query}&limit=40`
    )

    return response.data.data[Math.floor(Math.random() * 40)].images.original
      .url
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getGiphy }
