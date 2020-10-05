const axios = require("axios");



async function getUserResponse(response) {
    try {
      let queryUrl = `https://api.github.com/users/${response.username}`;  
      let response2 = await axios.get(queryUrl);
     
      console.log(response2.data)
      return response2.data;
    } catch (error) {
      console.log(error);
    }
  }

getUserResponse({username: 'nuchana'}).then(function(){
    console.log('Done')
})


module.exports = getUserResponse;
