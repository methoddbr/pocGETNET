const axios = require('axios');
const qs = require('qs');


const data = qs.stringify({
  'scope': 'oob',
  'grant_type': 'client_credentials'
});
var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api-sandbox.getnet.com.br/auth/oauth/v2/token',
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'authorization': 'Basic MTMyMGVhNDktNmFkNC00MmY1LTg5ZmYtYTA5OTM1NjNjYWE5OmRmNTRiOGEzLWQ5MjItNDMxNy05MjE5LTczMGU2YWZkZTAwZg==',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  data: data
};



async function Auth() {
  return await axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      return response.data;
    })
    .catch(function (error) {
      // console.log(error);
      return error;
    })
};

module.exports.Auth = Auth;


// (async () => {
//   const token = await Auth();
//   console.log(token?.access_token);
// })();


