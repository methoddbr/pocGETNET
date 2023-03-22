var axios = require('axios');


async function CardVerification(number_token, token) {
    var data = JSON.stringify({
        "number_token": `${number_token}`,
        "brand": "Mastercard",
        "cardholder_name": "JOAO DA SILVA",
        "expiration_month": "10",
        "expiration_year": "28",
        "security_code": "123"
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-sandbox.getnet.com.br/v1/cards/verification',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };

    return axios(config)
        .then(function (response) {
           // console.log(JSON.stringify(response.data));
           return response.data;
        })
        .catch(function (error) {
            // console.log(error);
            return error?.response?.data;
        });
}

module.exports.CardVerification = CardVerification;