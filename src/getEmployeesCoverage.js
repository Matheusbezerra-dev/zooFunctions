const data = require('../data/zoo_data');

const getSpecie = (paramTwon) => {
  const info = Object.values(paramTwon)[0];
  const employee = data.employees.find(({ id: one, firstName: two, lastName: three }) => [
    one, two, three].includes(info));
  if (!employee) throw new Error('Informações inválidas');
  const { id, firstName, lastName, responsibleFor: animalIds } = employee;
  const specie = data.species.filter(({ id: animalId }) => animalIds.some(
    (animal) => animal === animalId,
  ));

  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: specie.map(({ name }) => name),
    locations: specie.map(({ location }) => location) };
};

const getEmployeesCoverage = (param) => {
  if (param) return getSpecie(param);
  return data.employees.reduce((acc, { id }) => [...acc, getSpecie({ id })], []);
};

module.exports = getEmployeesCoverage;
