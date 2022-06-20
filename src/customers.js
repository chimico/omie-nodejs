const nodeFetch = require('node-fetch');

const paramValidation = require('./validation');
const OmieRequestBody = require('./OmieRequestBody');
const WrongParamError = require('./errors/WrongParamError');

const BASE_URL = 'https://app.omie.com.br/api/v1';
const URL = `${BASE_URL}/geral/clientes/`;

// FIXME: Não sei para que tem essa lista de métodos, nós estamos implementando cada método com nome
//        e parâmetros diferentes.

/**
 * This function will return the request from Omie API
 *
 * @param {object|number|string} params The parameter for Omie API
 * @returns {Object} the result of the request
 */
const retrieve = async (params) => {
  // Throws WrongParamError if invalid
  const bodyParams = paramValidation(params);

  const requestBody = new OmieRequestBody();

  const response = await nodeFetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: requestBody.getRequestBody('ConsultarCliente', bodyParams),
  });

  return response.json();
};

const customersMethods = {
  retrieve,
};

retrieve({integrationCode: 2});

module.exports = retrieve;
