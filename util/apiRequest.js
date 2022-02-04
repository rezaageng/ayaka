const { default: axios } = require("axios")

async function getGiphy(query) {
  try {
    const request = await axios.get(
      `api.giphy.com/v1/gifs/search?api_key=wvRV4B4QY1ojmsgJYdesQB41nGLdiBuW&q=${query}&limit=15`
    )
    const response = await request.json()

    return response.data
  } catch (error) {
    console.error(error)
  }
}

module.exports = { getGiphy }
