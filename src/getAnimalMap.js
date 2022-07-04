const data = require('../data/zoo_data');

const sorting = (number) => data.species.reduce((acc, specie) => ({ ...acc,
  [specie.location]: data.species.map((num) => {
    if (num.location !== specie.location) return null;
    if (number.sex) {
      return { [num.name]: num.residents.filter((element) => element.sex === number.sex)
        .map((numb) => numb.name).sort() };
    }
    return { [num.name]: num.residents.map((numberTwo) => numberTwo.name).sort() };
  }).filter((elements) => elements !== null),
}), {});

const nameSearch = (arg) => data.species.reduce((acc, specie) => ({ ...acc,
  [specie.location]: data.species.map((numb) => {
    if (numb.location !== specie.location) return null;
    if (arg.sex) {
      return { [numb.name]: numb.residents.filter((element) => element.sex === arg.sex)
        .map((numberFour) => numberFour.name) };
    }
    return { [numb.name]: numb.residents.map((numberTwo) => numberTwo.name) };
  }).filter((element) => element !== null),
}), {});

const namesByLocation = data.species.reduce((acc, specie) => ({ ...acc,
  [specie.location]: data.species.map((el) => {
    if (el.location === specie.location) {
      return el.name;
    }
    return null;
  }).filter((element) => element !== null),
}), {});

const getAnimalMap = (options = 0) => {
  if (!options.includeNames) {
    return namesByLocation;
  }
  if (options.sorted) {
    return sorting(options);
  }
  return nameSearch(options);
};

module.exports = getAnimalMap;
