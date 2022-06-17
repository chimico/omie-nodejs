const nodeFetch = require('node-fetch');
const paramValidation = require('./validation');
const generateRequestBody = require('./request');

const BASE_URL = 'https://app.omie.com.br/api/v1';

const methodList = {
  ConsultarCliente: ['codigo_cliente_omie', 'codigo_cliente_integracao'],
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
  AssociarCodIntCliente: ['codigo_cliente_omie', 'codigo_cliente_integracao'],
  UpsertCliente: [
    'codigo_cliente_integracao',
    'email',
    'razao_social',
    'nome_fantasia',
  ],
  UpsertClienteCpfCnpj: ['cnpj_cpf', 'email', 'razao_social', 'nome_fantasia'],
  ListaClientes: ['pagina', 'registros_por_pagina', 'apenas_importado_api'],
};

const Omie = ({key, secret, method}) => {

  paramValidation(key, secret);

  for (const methodCheck in methodList) {
    if (methodList.hasOwnProperty(method)) {
      const pickMethod = methodList[method];
      return pickMethod;
    } else {
      return 'Incorrect Method';
    }
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
