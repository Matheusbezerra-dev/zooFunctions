const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName !== 'string') {
    return {};
  }
  const findName = data.employees.find((info) =>
    employeeName === info.firstName || employeeName === info.lastName);
  return findName;
}

module.exports = getEmployeeByName;
