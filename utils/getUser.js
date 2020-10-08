const axios = require("axios");


async function getUser(userResponse) {
  try {
    let queryUrl = `https://api.github.com/users/${userResponse.username}`;
    let response = await axios.get(queryUrl);

    console.log(response.data)
    return response.data;
  } 
  catch (error) {
    console.log(error);
  }
}

// getUser({ username: 'nuchana' }).then(function () {
//   console.log('Done')
// })


module.exports = getUser;
