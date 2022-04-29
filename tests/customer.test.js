const nock = require('nock');
const chai = require('chai');

const OMIE_KEY = 'FAKEKEY';
const OMIE_SECRET = 'FAKESECRET';

const omie = require('../src/omie')({ key: OMIE_KEY, secret: OMIE_SECRET });

chai.should();

const OMIE_URL = 'https://app.omie.com.br/api/v1';
const CUSTOMER_URL = '/geral/clientes/';

nock(OMIE_URL)
  .post(CUSTOMER_URL, {
    call: 'ConsultarCliente',
    app_key: OMIE_KEY,
    app_secret: OMIE_SECRET,
    param: [{
      codigo_cliente_omie: 1,
    }],
  })
  .reply(200, {
    codigo_cliente_omie: 1,
  });

nock(OMIE_URL)
  .post(CUSTOMER_URL, {
    call: 'ConsultarCliente',
    app_key: OMIE_KEY,
    app_secret: OMIE_SECRET,
    param: [{
      codigo_cliente_integracao: '2',
    }],
  })
  .reply(200, {
    codigo_cliente_integracao: '2',
  });

describe('Customer Resource', () => {
  describe('retrieve', () => {
    it('Sends the correct request with id', async () => {
      const data = await omie.general.customers.retrieve(1);

      data.should.have.property('codigo_cliente_omie').with.equal(1);
    });

    it ('Sends the correct request with integration code', async() => {
      const data = await omie.general.customers.retrieve({
        integrationCode: '2',
      });

      data.should.have.property('codigo_cliente_integracao').with.equal('2');
    });

    it ('Sends the incorrect request', async() => {
      const data = await omie.general.customers.retrieve({
        integrationCod: '2',
      });

      data.should.have.property('codigo_cliente_integracao').with.equal('2');
    });
  });
});
