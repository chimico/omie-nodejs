const fetch = require('node-fetch');

const url = 'https://app.omie.com.br/api/v1/geral/clientes/';
const options = {
  'method': "GET",
};

const response = await fetch(url, options)
.then(res => {
    console.log(res)
    return res.json()
})
.then((data) => console.log(data))
.catch(e => {
  console.error ({
    "message": "something goes wrong",
    error: e,
  })
})
console.log('RESPONSE: ', response)
res.json(response)
