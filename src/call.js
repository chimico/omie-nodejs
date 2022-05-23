const omie = require('./omie');

async function useOmie() {
  const objectCall = await omie('teste', 12).general.customers.retrieve(1);
  console.log(objectCall);
}

useOmie();
