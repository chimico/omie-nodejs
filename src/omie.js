const isPlainObject = require('lodash.isplainobject');
const has = require('lodash.has');
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

function paramValidation(params) {
  if (isPlainObject(params)) {
    if (has(params, 'integrationCode')) {
      return params.integrationCode;
    }
    return 'inválido';
  }

  const parsedParam = Number.parseInt(params, 10);

  if (parsedParam !== NaN) {
    return parsedParam;
  }
  return 'Inválido';
}

const Omie = ({ key, secret }) => {
  // TODO: Validate key and secret is present in the request
  return {
    general: {
      customers: {
        retrieve: async (params) => {
          // TODO: Validate params

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
          const requestBody = generateRequestBody(key, secret, 'ConsultarCliente', bodyParams);

          const response = await nodeFetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: requestBody,
          });
          return response.json();
        },
      }
    }
  }
};

module.exports = Omie;
