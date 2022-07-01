const data = require('../data/zoo_data');

const days = Object.keys(data.hours);
const hours = Object.values(data.hours);
const animals = data.species.map((numb) => numb.name);

const mappingSchedule = () => days.reduce((acc, number, index) => {
  if (number === 'Monday') {
    acc[number] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  } else {
    acc[number] = {
      officeHour: `Open from ${hours[index].open}am until ${hours[index].close}pm`,
      exhibition: data.species.filter((spc) => spc.availability.includes(number))
        .map((obj) => obj.name),
    };
  }
  return acc;
}, {});

const daySchedule = (scheduleTarget) => ({ [scheduleTarget]: mappingSchedule()[scheduleTarget] });

const getSchedule = (param) => {
  if (!param) return mappingSchedule();
  if (days.includes(param)) return daySchedule(param);
  if (animals.includes(param)) return data.species.find((x) => x.name === param).availability;
  return mappingSchedule();
};

module.exports = getSchedule;
