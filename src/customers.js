const nodeFetch = require('node-fetch');

const paramValidation = require('./validation');
const OmieRequestBody = require('./OmieRequestBody');
const WrongParamError = require('./errors/WrongParamError');

const BASE_URL = 'https://app.omie.com.br/api/v1';
const URL = `${BASE_URL}/geral/clientes/`;

// FIXME: Não sei para que tem essa lista de métodos, nós estamos implementando cada método com nome
//        e parâmetros diferentes.

const availableMethods = {
  ConsultarCliente: [
    'codigo_cliente_omie',
    'codigo_cliente_integracao'
  ],
  IncluirCliente: [
    'codigo_cliente_integracao',
    'email',
    'razao_social',
    'nome_fantasia',
  ],
  AlternarCliente: [
    'codigo_cliente_integracao',
    'email',
    'razao_social',
    'nome_fantasia',
  ],
  AssociarCodIntCliente: [
    'codigo_cliente_omie',
    'codigo_cliente_integracao'
  ],
  UpsertCliente: [
    'codigo_cliente_integracao',
    'email',
    'razao_social',
    'nome_fantasia',
  ],
  UpsertClienteCpfCnpj: [
    'cnpj_cpf',
    'email',
    'razao_social',
    'nome_fantasia'
  ],
  ListaClientes: [
    'pagina',
    'registros_por_pagina',
    'apenas_importado_api'
  ],
};

// TODO: Adicionar comentário para documentação aqui. https://jsdoc.app
/**
 * This function will return the request from Omie API
 *
 * @param {Object|number|string} params The parameter for Omie API
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

module.exports = customersMethods;
