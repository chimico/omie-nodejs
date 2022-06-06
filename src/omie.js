const nodeFetch = require('node-fetch');
const paramValidation = require('./validation');
const generateRequestBody = require('./request');

const BASE_URL = 'https://app.omie.com.br/api/v1';

const Omie = ({key, secret}) => {
  if (key === undefined || secret === undefined) {
    throw new Error('Insert Key or Secret');
  }
  return {
    general: {
      customers: {
        retrieve: async (params) => {
          const paramsProcessed = paramValidation(params);
          if (paramsProcessed == 'inválido') {
            return 'inválido';
          }
          const bodyParams = {};
          if (Number.isFinite(params)) {
            bodyParams.codigo_cliente_omie = params;
          } else {
            bodyParams.codigo_cliente_integracao = params.integrationCode;
          }

          const URL = `${BASE_URL}/geral/clientes/`;
          const requestBody = generateRequestBody(
            key,
            secret,
            'ConsultarCliente',
            bodyParams
          );

          const response = await nodeFetch(URL, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: requestBody,
          });
          return response.json();
        },
      },
    },
  };
};

module.exports = Omie;
