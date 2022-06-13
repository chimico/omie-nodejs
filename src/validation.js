const isPlainObject = require('lodash.isplainobject');
const has = require('lodash.has');
const WrongParamError = require('./errors/WrongParamError');

// class WrongParamError {
//   constructor(integrationParam) {
//     this.integrationParam = integrationParam;
//   }

//   errorThrow(integrationParam) {
//     return `Param is incorrect, you typed ${JSON.stringify(
//       this.integrationParam
//     )}`;
//   }
// }

function paramValidation(params) {
  if (isPlainObject(params)) {
    if (has(params, 'integrationCode')) {
      return params.integrationCode;
    }
    throw new WrongParamError({
      param: params,
      detail: 'param incorrect',
      statusCode: 400,
      message: 'Please, use integrationCode',
    });
  }

  const parsedParam = Number.parseInt(params, 10);

  if (parsedParam !== NaN) {
    return parsedParam;
  }
  return 'Inválido';
}

// async function invalidRequest() {
//   try {
//     await omie.general.customers.retrieve({errado: 1});
//   } catch (err) {
//     if (err.code >= 500) {
//       return 'Omie está com problemas.';
//     }
//     if (err.type === 'InvalidParameters') {
//       return `Foi parâmetros errados: ${JSON.stringify(err.parameters)}.`;
//     }
//   }
// }

module.exports = paramValidation;
