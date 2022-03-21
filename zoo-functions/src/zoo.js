const { species, employees, prices, hours } = require('./data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  if (ids.length === 1) {
    return species.filter((crr) => crr.id === ids[0]);
  }
  return ids.map((id) => species.find((crr) => crr.id === id));
}

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species
    .filter((crr) => crr.name === animal)
    .every((crr, i) => crr.residents[i].age > age);
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  return employees
    .find((crr) => crr.firstName === employeeName || crr.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  const { id, firstName, lastName } = personalInfo;
  const { managers, responsibleFor } = associatedWith;
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return newEmployee;
}

function isManager(id) {
  // seu código aqui
  return employees.some((crr, i) => crr.managers[i] === id);
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  employees.push({
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  });
}

function countAnimals(animals) {
  // seu código aqui
  if (animals === undefined) {
    const animalsQt = {};
    species.forEach((crr) => {
      animalsQt[`${crr.name}`] = crr.residents.length;
    });
    return animalsQt;
    // return species.reduce((acc, crr) => acc[`${crr.name}`] = crr.residents.length, {});
  }
  return species.find((crr) => crr.name === animals).residents.length;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  return Object.keys(entrants).reduce((acc, crr) => acc + (entrants[crr] * prices[crr]), 0);
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const days = Object.keys(hours).reduce((acc, crr) => {
    const { open, close } = hours[crr];
    if (open === 0) {
      acc[crr] = 'CLOSED';
    } else {
      acc[crr] = `Open from ${open}am until ${close - 12}pm`;
    }
    return acc;
  }, {});
  if (!dayName) {
    return days;
  }
  return { [dayName]: days[dayName] };
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const animalId = employees.find((crr) => crr.id === id).responsibleFor[0];
  const allAnimals = species.find((crr) => crr.id === animalId).residents;
  const oldest = allAnimals.sort((a, b) => b.age - a.age)[0];

  return Object.values(oldest);
}

function increasePrices(percentage) {
  // seu código aqui
  return Object.keys(prices).forEach((crr) => {
    prices[crr] = Math.ceil(prices[crr] * (percentage + 100)) / 100;
  });
}

function getEmployeeCoverage(idOrName) {
  // const output = {};
  // const { firstName, lastName, responsibleFor } = employees.find((crr) =>
  //   crr.id === idOrName || crr.firstName === idOrName || crr.lastName === idOrName);
  // const idToName = (arrayOfIds) => arrayOfIds.reduce((acc, crr) => {
  //   species.forEach((animal) => {
  //     if (animal.id === crr) return acc.push(animal.name);
  //   });
  //   return acc;
  // }, []);
  // if (idOrName === undefined) {
  //   return employees.reduce((acc, crr) => {
  //     acc[`${crr.firstName} ${crr.lastName}`] = idToName(crr.responsibleFor);
  //     return acc;
  //   }, {});
  // }
  // output[`${firstName} ${lastName}`] = idToName(responsibleFor);
  // return output;
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
