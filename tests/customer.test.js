const omie = require('../src/omie')({ key: 'FAKEKEY', secret: 'FAKESECRET'});
const nock = require('nock');
const chai = require('chai');

chai.should();

nock('https://app.omie.com.br/api/v1')
  .post('/geral/clientes/', {
    call: 'ConsultarCliente',
    app_key: 'FAKEKEY',
    app_secret: 'FAKESECRET',
    param: [{ codigo_cliente_omie: 1 }]
  })
  .reply(200, {
    codigo_cliente_omie: 1,
  });

describe('Customer Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request with id', async () => {
      const data = await omie.general.customers.retrieve(1);

      data.should.have.property('codigo_cliente_omie').with.equal(1);
    });
  });
});
