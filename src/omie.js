const fetch = require('node-fetch')

const Omie = (args) => {
  return {
    general: {
      customers: {
        retrieve: async (params) => {
          const response = await fetch('https://app.omie.com.br/api/v1/geral/clientes/', {method: 'post', body: params,});
          return response;
        }
      }
    }
  }
};

module.exports = Omie;

// node fetch, usar POST, dentro da função retrieve passar os argumentos e testando chamando a API, nock retornará o dado.
// node fetch API errada, o Post só vai funcionar ao passar o body
// commita tudo (commit, mas não da push)
