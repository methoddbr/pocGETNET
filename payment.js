var axios = require('axios');

async function Payment(number_token, token) {
    var data = JSON.stringify({
        "seller_id": "ab27da5f-0395-42aa-b02b-ef602c841a67",
        "amount": "1000",
        "order": {
            "order_id": "12345"
        },
        "customer": {
            "customer_id": "12345",
            "first_name": "João",
            "last_name": "da Silva",
            "email": "aceitei@getnet.com.br",
            "document_type": "CPF",
            "document_number": "12345678912",
            "phone_number": "5551999887766",
            "billing_address": {
                "street": "Av. Brasil",
                "number": "1000",
                "city": "Porto Alegre",
                "state": "RS",
                "postal_code": "90230060"
            }
        },
        "device": {},
        "shippings": [
            {
                "address": {
                    "street": "Av. Brasil",
                    "number": "1000",
                    "city": "Porto Alegre",
                    "state": "RS",
                    "postal_code": "90230060"
                }
            }
        ],
        "sub_merchant": {},
        "credit": {
            "delayed": false,
            "save_card_data": false,
            "transaction_type": "FULL",
            "number_installments": 1,
            "card": {
                "number_token": `${number_token}`,
                "cardholder_name": "JOAO DA SILVA",
                "brand": "Mastercard",
                "expiration_month": "12",
                "expiration_year": "27"
            }
        }
    });

    var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://api-sandbox.getnet.com.br/v1/payments/credit',
        headers: {
            'seller_id': 'ab27da5f-0395-42aa-b02b-ef602c841a67',
            'Accept': 'application/json, text/plain, */*',
            // 'Authorization': 'Bearer 43517d8f-cc6f-4664-9d40-1e546b67ccb4',
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

module.exports.Payment = Payment;