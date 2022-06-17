const isPlainObject = require('lodash.isplainobject');
const has = require('./utils');
const WrongParamError = require('./errors/WrongParamError');

// FIXME: Essa função só faz a validação do método retrieve do cliente
function paramValidation(key, secret, params) {
  if (key === undefined || secret === undefined) {
    throw new WrongParamError({
      param: [key, secret],
      detail: 'key or secret is empty',
      statusCode: 400,
      message: 'Please, check the key and secret',
    });
  } else {
    return key && secret;
  }

  if (isPlainObject(params)) {
    if (has(params, 'integrationCode')) {
      return { codigo_cliente_integracao: params.integrationCode };
    }

    throw new WrongParamError({
      param: params,
      detail: 'param incorrect',
      statusCode: 400,
      message: 'Please, use integrationCode',
    });
  }

  const id = Number(params);

  if (Number.isNaN(id)) {
    throw new WrongParamError({
      param: params,
      detail: 'param incorrect',
      statusCode: 400,
      message: 'Please, use integrationCode',
    });
  }

  return { codigo_cliente_omie: params };
}

module.exports = paramValidation;
