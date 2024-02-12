const response = require('./response.json');

const mappedArray = response.map(item => ({
  name: item.name,
  year: item.vehicle.year,
  skills: item.skills.map(s => s),
  model: item.vehicle.model
}));

console.log("Mapped Array:");
console.log(mappedArray);

const filteredArray = response.filter(item => item.vehicle.year > 2020);

console.log("\nFiltered Array Year more than 2020:");
console.log(filteredArray);
