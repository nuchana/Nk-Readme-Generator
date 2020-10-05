const axios = require("axios");
const queryUrl = `https://api.github.com/users/${userResponse.username}`;



async function getUserResponse() {
    try {
      let response = await axios.get(queryUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }


module.exports = getUserResponse;