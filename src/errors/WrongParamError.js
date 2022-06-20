// TODO: Essa classe deve receber os dados enviados e qual dado está errado
//       O retorno tem que ser qual campo/valor está errado
class WrongParamError extends Error {
  constructor(param) {
    this.param = param;
  }

  ErrorThrow(param) {
    return `Param is incorrect, you typed ${JSON.stringify(this.param)}`;
  }

  static IntegrationError(param) {
    return `${JSON.stringify(
      param
    )}, is incorrect, you should use the right key`;
  }

  static NumberError(param) {
    return `${JSON.stringify(
      param
    )}, Please check your ID from Omie and try again`;
  }
}

module.exports = WrongParamError;


funcao({integrationCode: 2})
