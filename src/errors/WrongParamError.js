// TODO: Essa classe deve receber os dados enviados e qual dado está errado
//       O retorno tem que ser qual campo/valor está errado
class WrongParamError extends Error {
  constructor(raw = {}) {
    super(raw.message);
    this.type = this.constructor.name;
    this.raw = raw;
    this.code = raw.code;
    this.param = raw.param;
    this.detail = raw.detail;
    this.header = raw.header;
    this.requestId = raw.requestId;
    this.statusCode = raw.statusCode;
    this.message = raw.message;
  }

  errorThrow(param) {
    return `Param is incorrect, you typed ${JSON.stringify(this.param)}`;
  }
}

module.exports = WrongParamError;
