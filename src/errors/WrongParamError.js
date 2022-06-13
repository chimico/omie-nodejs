// TODO: Essa classe deve receber os dados enviados e qual dado está errado
//       O retorno tem que ser qual campo/valor está errado
class WrongParamError extends Error {
  super(integrationParam) {
    this.integrationParam = integrationParam;
  }

  errorThrow(integrationParam) {
    return `Param is incorrect, you typed ${JSON.stringify(
      this.integrationParam
    )}`;
  }
}
