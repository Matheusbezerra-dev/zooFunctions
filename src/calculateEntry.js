const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const numberChilds = entrants.filter(({ age }) => age < 18).length;
  const nummberAdults = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const numberSenior = entrants.filter(({ age }) => age >= 50).length;
  const numberPeople = { child: numberChilds, adult: nummberAdults, senior: numberSenior };
  return numberPeople;
};

const calculateEntry = (entrants) => {
  if (!Array.isArray(entrants)) return 0;
  const people = countEntrants(entrants);
  const sum = (people.child * data.prices.child) + (people.adult * data.prices.adult) + (
    people.senior * data.prices.senior);
  return sum;
};

module.exports = { calculateEntry, countEntrants };
