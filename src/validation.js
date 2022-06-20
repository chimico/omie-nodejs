const isPlainObject = require('lodash.isplainobject');
const has = require('./utils');
const WrongParamError = require('./errors/WrongParamError');

// FIXME: Essa função só faz a validação do método retrieve do cliente
function paramValidation(key, secret, params) {
  if (isPlainObject(params)) {
    if (has(params, 'integrationCode')) {
      return { codigo_cliente_integracao: params.integrationCode };
    }

    throw new WrongParamError.IntegrationError(params);
  }

  const id = Number(params);

  if (Number.isNaN(id)) {
    throw new WrongParamError.NumberError(params);
  }

  return { codigo_cliente_omie: params };
}

module.exports = paramValidation;
