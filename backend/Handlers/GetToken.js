const axios = require('axios');
let token = ''; 

async function GetToken() {
  const apiUrl = 'http://20.244.56.144/train/auth';
  const requestData = {
    companyName: 'Train Central',
    clientID: '525e25eb-958a-4e81-aa82-bb34960b75dc',
    ownerName: 'EESA',
    ownerEmail: 'eesashaik03@gmail.com',
    rollNo: '20JR1A4459',
    clientSecret: 'lTpEsGuymNstQzxP',
  };

  try {
    const response = await axios.post(apiUrl, requestData);
    token = response.data.access_token;
    return token; 
  } catch (error) {
    console.error('Error', error.message);
    return null; 
  }
}

module.exports = GetToken;
