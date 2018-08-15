"use strict";

const cities = [
  {
    id: 1,
    name: "Graz",
    population: 266997,
    size: 127.6,
    districts: [
      { districtNr: 1, name: "Innere Stadt", population: 3813 },
      { districtNr: 2, name: "St. Leonhard", population: 15829 },
      { districtNr: 3, name: "Geidorf", population: 24484 },
      { districtNr: 4, name: "Lend", population: 30199 }
    ]
  },
  {
    id: 2,
    name: "Vienna",
    population: 1888776,
    size: 414.6,
    districts: []
  }
];

module.exports = {
  listCities: listCities,
  getCity: getCity,
  addCity: addCity
};

function getCity(req, res) {
  const cityId = req.swagger.params.cityId.value;
  res.json(cities.find(city => city.id === cityId));
}

function listCities(req, res) {
  res.json(cities.map(({ id, name }) => ({ id, name })));
}

function addCity(req, res) {
  const id = { id: cities.length + 1 };
  const newCitiy = { ...req.swagger.params.city.value, ...id };
  cities.push(newCitiy);
  res.json(listCities(req, res));
}

function toCity({ id, name }) {
  return { id, name };
}
