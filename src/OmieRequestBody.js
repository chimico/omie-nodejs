class OmieRequestBody {
  constructor(key, secret) {
    if (!OmieRequestBody.instance) {
      this.key = key;
      this.secret = secret;

      OmieRequestBody.instance = this;
      return this;
    }

    return OmieRequestBody.instance;
  }

  getRequestBody(method, params) {
    return JSON.stringify({
      call: method,
      app_key: this.key,
      app_secret: this.secret,
      param: [params],
    });
  }
}

module.exports = OmieRequestBody;
