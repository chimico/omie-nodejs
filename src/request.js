const generateRequestBody = (key, secret, method, params) => {
  return JSON.stringify({
    call: method,
    app_key: key,
    app_secret: secret,
    param: [params],
  });
};

module.exports = generateRequestBody;
