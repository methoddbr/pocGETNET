const { Auth } = require("./auth");
const { Tokenization } = require("./tokenization");
const { CardVerification } = require("./cardVerification");
const { Payment } = require("./payment");

(async () => {
    const token = await Auth();
    console.log('access_token', token?.access_token);

    const tokenization = await Tokenization(token?.access_token);
    console.log('number_token',tokenization?.number_token);

    const cardVerification = await CardVerification(tokenization?.number_token, token?.access_token);
    console.log('cardVerification', cardVerification);

    const payment = await Payment(tokenization?.number_token, token?.access_token);
    // const payment = await Payment(tokenization?.number_token, '43517d8f-cc6f-4664-9d40-1e546b67ccb4');
    console.log('payment', payment);
})();