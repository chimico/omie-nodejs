const omie = require('./omie');

// const omieUrl = 'https://app.omie.com.br/api/v1/geral/clientes/';

async function useOmie() {
  const objectCall = await omie('teste', 12).general.customers.retrieve(1);
  console.log(objectCall);

  const client = () => {
    let incluirClientes = {
      call: 'IncluirCliente',
      app_key: 'SomeKey',
      secret_key: 'someSecretKey',
      param: [
        {
          codigo_cliente_integracao: 'CodigoInterno0001',
          email: 'primeiro@ccliente.com.br',
          razao_social: 'Primeiro Cliente  Ltda Me',
          nome_fantasia: 'Primeiro Cliente',
        },
      ],
    };
  };

  return client();
}

useOmie();
