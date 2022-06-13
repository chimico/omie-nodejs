const OmieRequestBody = require('./OmieRequestBody');
const customers = require('./customers');

const Omie = ({ key, secret }) => {
  if (key === undefined || secret === undefined) {
    throw new Error('Key and Secret must be provided');
  }

  // Create the single instance
  new OmieRequestBody(key, secret);

  return {
    general: {
      customers,
    },
  };
};

module.exports = Omie;
