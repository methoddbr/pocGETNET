const axios = require('axios');
const data = JSON.stringify({
    "card_number": "5155901222280001"
});

async function Tokenization(token) {
    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-sandbox.getnet.com.br/v1/tokens/card',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    return await axios(config)
        .then(function (response) {
            //console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch(function (error) {
            //console.log(error);
            return error;
        });
}

module.exports.Tokenization = Tokenization;

