const Omie = (args) => {
  return {
    general: {
      customers: {
        retrieve: async () => {
          return {
            codigo_cliente_omie: 1,
            integrationCode: '1',
          }
        }
      }
    }
  }
};

module.exports = Omie;

// node fetch, usar POST, dentro da função retrieve passar os argumentos e testando chamando a API, nock retornará o dado.
// node fetch API errada, o Post só vai funcionar ao passar o body
// commita tudo (commit, mas não da push)
