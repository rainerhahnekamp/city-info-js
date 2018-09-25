"use strict";

const cities = [
  {
    name: "Vienna",
    population: 1888776,
    size: 414.6
  },
  {
    name: "Graz",
    population: 266997,
    size: 127.6
  }
];

module.exports = {
  listCities: listCities,
  addCity: addCity,
  deleteCity: deleteCity
};

function listCities(req, res) {
  res.json(cities);
}

function addCity(req, res) {
  const city = req.swagger.params.city.value;
  cities.push(city);
  res.json(listCities(req, res));
}

function deleteCity(req, res) {
  console.log(req.swagger.params.name);
  const name = req.swagger.params.name.value;
  const cityIx = cities.findIndex(city => city.name === name);
  cities.slice(cityIx, 1);
  res.json(listCities(req, res));
}
