const nodeFetch = require('node-fetch');

const BASE_URL = 'https://app.omie.com.br/api/v1';

const generateRequestBody = (key, secret, method, params) => {
  return JSON.stringify({
    call: method,
    app_key: key,
    app_secret: secret,
    param: [params],
  });
};

const Omie = ({ key, secret }) => {
  // TODO: Validate key and secret is present in the request
  return {
    general: {
      customers: {
        retrieve: async (params=paramRequired()) => {
          // TODO: Validate params

          if (params != 'codigo_cliente_omie' || params != 'codigo_cliente_integracao') {
            throw new Error('Parameter Invalid');
          };

          const bodyParams = {};
          if (Number.isFinite(params)) {
            bodyParams.codigo_cliente_omie = params;
          } else {
            bodyParams.codigo_cliente_integracao = params.integrationCode;
          }

          const URL = `${BASE_URL}/geral/clientes/`;
          const requestBody = generateRequestBody(key, secret, 'ConsultarCliente', bodyParams);

          const response = await nodeFetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: requestBody,
          });
          return response.json();
          return retrieve(clientes_cadastro_chave)
        },

        paramRequired: () => {
          throw new Error('Parameters is required')
        },
      }
    }
  }
};

module.exports = Omie;

console.log(Omie().retrieve())
