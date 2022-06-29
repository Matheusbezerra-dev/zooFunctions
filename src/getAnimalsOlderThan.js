const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, ageTwo) => data.species.some(
  ({ name, residents }) => name === animal && residents.every(({ age }) => age >= ageTwo),
);
module.exports = getAnimalsOlderThan;
