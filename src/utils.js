const hasOwnProperty = Object.prototype.hasOwnProperty;

const has = (object, key) => {
  return hasOwnProperty.call(object, key);
};

module.exports = has;
