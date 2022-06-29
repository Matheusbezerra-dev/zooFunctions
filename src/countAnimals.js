const data = require('../data/zoo_data');

function countAnimals(animal) {
  const c = {};
  if (!animal) {
    data.species.forEach((element) => {
      c[element.name] = element.residents.length;
    });
    return c;
  }
  if (!animal.sex) {
    return data.species.find((element) => element.name === animal.specie).residents.length;
  }
  return data.species.find((element) => element.name === animal.specie).residents
    .filter((element) => element.sex === animal.sex).length;
}

module.exports = countAnimals;
