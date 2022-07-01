const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => Object.values(data.species
  .find((element) => element.id === data.employees
    .find((people) => people.id === id).responsibleFor[0]).residents
  .sort((a, b) => b.age - a.age)[0]);

module.exports = getOldestFromFirstSpecies;
